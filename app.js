// var g = G$('Naitik', 'Shah');
// g.greetUser().setLanguage('en').greetUser(true).log();
// console.log(g);




function Submit() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var language = $('#lang').val();
    // console.log(firstName);
    // console.log(lastName)
    // console.log(language);

    var loginGreetr = G$(firstName, lastName, language);

    $('#loginForm').hide();

    loginGreetr.setLanguage($('#lang').val()).HTMLGreeting('#greetings').log();



}
