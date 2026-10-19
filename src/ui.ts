/**
 * Interfaz gráfica
 * @author IkerOwO
 */

import { createAccount, loginAccount } from './utils/transactions'

/**
 * UI Registro
 */
export function registerUI() {
    const registerLabel = document.createElement('h1');
    registerLabel.innerText = 'Registrar';
    registerLabel.className = 'registerLabel';

    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.placeholder = 'Introduce el nombre';
    nombreInput.className = 'nombreInput';

    const apellidosInput = document.createElement('input');
    apellidosInput.type = 'text';
    apellidosInput.placeholder = 'Introduce los apellidos';
    apellidosInput.className = 'apellidosInput';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Introduce el email';
    emailInput.className = 'emailInput';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Introduce la contraseña';
    passwordInput.className = 'passwordInput';

    const repeatPasswordInput = document.createElement('input');
    repeatPasswordInput.type = 'password';
    repeatPasswordInput.placeholder = 'Repite la contraseña';
    repeatPasswordInput.className = 'repeatPasswordInput';

    const balanceInicialInput = document.createElement('input');
    balanceInicialInput.type = 'number';
    balanceInicialInput.placeholder = 'Introduce el balance inicial';
    balanceInicialInput.className = 'balanceInicialInput';

    const createButton = document.createElement('button');
    createButton.textContent = 'Crear Cuenta';
    createButton.className = 'createButton';

    // Agregamos todo al body
    document.body.appendChild(registerLabel);
    document.body.appendChild(nombreInput);
    document.body.appendChild(apellidosInput);
    document.body.appendChild(emailInput);
    document.body.appendChild(passwordInput);
    document.body.appendChild(balanceInicialInput);
    document.body.appendChild(createButton);
    
    // Texto de los inputs
    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const email = emailInput.value.trim();
    const balanceInicial = Number(balanceInicialInput.value.trim()); // de string a number
    const password = passwordInput.value.trim();
    const repeatPass = repeatPasswordInput.value.trim();

    // Agregamos el EventListener al boton de crear cuenta
    createButton.addEventListener('click', () => {
        if (repeatPass !== password) {
            alert("Las contraseñas no coinciden");
            return;
        }
        createAccount(nombre, apellidos, email, password, balanceInicial);
    });
} 

/**
 * UI Login
 */
export function loginUI() {
    const loginLabel = document.createElement('h1');
    loginLabel.innerText = 'Login';
    loginLabel.className = 'loginLabel';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Introduce el email';
    emailInput.className = 'emailInput';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Introduce la contraseña';
    passwordInput.className = 'passwordInput';

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.className = 'loginButton';

    const registerRedirectLink = document.createElement('a');
    registerRedirectLink.href = '#register';
    registerRedirectLink.textContent = '¿No tienes cuenta? Regístrate';
    registerRedirectLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.replaceChildren();
        registerUI();
    });

    // Agregamos todo al body
    document.body.appendChild(loginLabel);
    document.body.appendChild(emailInput);
    document.body.appendChild(passwordInput);
    document.body.appendChild(loginButton);
    document.body.appendChild(registerRedirectLink);
    
    // Texto de los inputs
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Agregamos el EventListener al boton de login 
    loginButton.addEventListener('click', () => {
       loginAccount(email, password);
    });
}