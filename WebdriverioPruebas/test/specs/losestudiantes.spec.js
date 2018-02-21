var assert = require('assert');
describe('los estudiantes login', function() {
 var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    it('SignUp', function() {

        var cajaSignUp = browser.element('.cajaSignUp');
        var nombreInput = cajaSignUp.element('input[name="nombre"]');

        nombreInput.click();
        nombreInput.keys('Juan');

        var apellido = cajaSignUp.element('input[name="apellido"]');
        apellido.click();
        apellido.keys('Cifuentes');

        var correo = cajaSignUp.element('input[name="correo"]');
        correo.click();
        correo.keys('juanca0517@yaho.es');

        var universidad = cajaSignUp.element('select[name="idUniversidad"]');
        universidad.selectByValue('universidad-de-los-andes');


        var programa = cajaSignUp.element('select[name="idPrograma"]');
        programa.selectByValue('66');

	    var password = cajaSignUp.element('input[name="password"]');
        password.click();
        password.keys('123456789');

        var aceptar = cajaSignUp.element('input[name="acepta"]');
        aceptar.click();

        cajaSignUp.element('button=Registrarse').click();
        browser.waitForVisible('button=Ok', 5000);
        browser.element('button=Ok').click();

	})

	it('LoginOK', function(){

	    var cajaLogIn = browser.element('.cajaLogIn');
        var mailIn = cajaLogIn.element('input[name="correo"]');

        mailIn.click();
        mailIn.clearElement();
        mailIn.keys('juanca0517@yahoo.es');

        var passwordIn = cajaLogIn.element('input[name="password"]');

        passwordIn.click();
        passwordIn.clearElement();
        passwordIn.keys('123456789');

        cajaLogIn.element('button=Ingresar').click()

	})

	it('SignUpFail', function() {

        var cajaSignUp = browser.element('.cajaSignUp');
        var nombreInput = cajaSignUp.element('input[name="nombre"]');

        nombreInput.click();
        nombreInput.keys('Juan');

        var apellido = cajaSignUp.element('input[name="apellido"]');
        apellido.click();
        apellido.keys('Cifuentes');

        var correo = cajaSignUp.element('input[name="correo"]');
        correo.click();
        correo.keys('juanca0517@yaho.es');

        var universidad = cajaSignUp.element('select[name="idUniversidad"]');
        universidad.selectByValue('universidad-de-los-andes');


        var programa = cajaSignUp.element('select[name="idPrograma"]');
        programa.selectByValue('66');

	    var password = cajaSignUp.element('input[name="password"]');
        password.click();
        password.keys('123456789');

        var aceptar = cajaSignUp.element('input[name="acepta"]');
        aceptar.click();

        cajaSignUp.element('button=Registrarse').click();

        browser.waitForVisible('.lead', 5000);

        var alertText = browser.element('.lead').getText();
        expect(alertText).toBe('Ya existe un usuario registrado con el correo');
        })

     it('Acceder a la pagina de un profesor', function(){

        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.click('button=Alfabetico');

        var docentes = browser.element('.profesores');
        var docente = docentes.element('.profesor');
        var docenteSelected = docente.element('a[href="universidad-de-los-andes/matematicas/profesores/adolfo-jose-quiroz-salazar"]');
        docenteSelected.click();
})

});