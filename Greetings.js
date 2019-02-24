// Create the required execution context.
// Accessing the global window
// Develop an IIFE for anyone to use the library at any point of time for greetings

;(function (global, $) {
    // Setting up a function for details

    var Greetings =  function (firstName, lastName, language) {
        // generating a separate function generator using 'new'
        return new Greetings.init(firstName, lastName, language);
    };

    // using closures the variable can be accessed anytime and not exposed to the outside world
    // hidden within the scope of iife and is accessible directly
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greet = {
        en: 'Hello, ',
        es: 'Hola, '
    };

    // informal questions
    var greetQuestion = {
        en: ' How are you doing today?',
        es: 'Cómo estás hoy?'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // Log messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetings.prototype = {

        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            if(supportedLangs.indexOf(this.language) === -1){
                return false;
            }
            return true;
        },

        greeting: function () {
            return greet[this.language] + ' ' + this.firstName + '!' + greetQuestion[this.language];
        },

        formalGreetings: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable
        greetUser: function (formal) {
            var message;

            // if undefined or null, coercing it to 'false'
            if(formal) {
                message = this.formalGreetings();
            }else {
                message = this.greeting();
            }
            if (console) {
                console.log(message);
            }
            return this;
        },

        // chainable
        log: function () {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            return this;
        },

        // chainable
        setLanguage: function (changedLang) {
            var previousLanguage = this.language;
            this.language = changedLang;
            if(this.validate()) {
                return this;
            }
            if(console){
            console.log("Language Not Supported, Printing in default language")
            }
            this.language = previousLanguage;
            return this;
        },

        // chainable
        HTMLGreeting: function (selector, formal) {
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery Selector'
            }

            var message;
            if(formal) {
                message = this.formalGreetings();
            } else {
                message = this.greeting();
            }
            // console.log(selector)
            // console.log(message)
            $(selector).html(message);

            return this;

        }


    };

    // Actual object generation takes place here which allows us to develop a new object without calling new explicitly
    Greetings.init = function( firstName, lastName, language ) {
      // Setting up the default parameters
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';


    };

    // Pointing the prototype chain to the greetings prototype
    Greetings.init.prototype = Greetings.prototype;

    // setting up the required alias and attaching the greetings to the global object
    global.Greetings = global.G$ = Greetings;

}(window,jQuery));
