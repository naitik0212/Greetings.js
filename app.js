var g = G$('Naitik', 'Shah');
g.greetUser().setLanguage('en').greetUser(true).log();
console.log(g);

$('#login').click(function () {
    var loginGreetr = G$('Naitik', 'Shah');

    $('#loginForm').hide();

    loginGreetr.setLanguage($('#lang').val()).HTMLGreeting('#greetings').log();

});
