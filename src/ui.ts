/**
 * Interfaz gráfica
 * @author IkerOwO
 */

import { createAccount, loginAccount } from './utils/transactions'

/**
 * UI Registro
 */
export function registerUI() {
    const authCard = document.createElement('main');
    authCard.className = 'authCard';

    const authHeader = document.createElement('header');
    authHeader.className = 'authHeader';

    const authEyebrow = document.createElement('p');
    authEyebrow.className = 'authEyebrow';
    authEyebrow.textContent = 'MONEY TRACK';

    const registerLabel = document.createElement('h1');
    registerLabel.innerText = 'Crea tu cuenta';
    registerLabel.className = 'registerLabel';

    const authDescription = document.createElement('p');
    authDescription.className = 'authDescription';
    authDescription.textContent = 'Empieza a organizar tus finanzas en un solo lugar.';

    authHeader.append(authEyebrow, registerLabel, authDescription);

    const registerForm = document.createElement('form');
    registerForm.className = 'authForm';

    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.placeholder = 'Introduce el nombre';
    nombreInput.className = 'nombreInput';
    nombreInput.autocomplete = 'given-name';
    nombreInput.required = true;

    const apellidosInput = document.createElement('input');
    apellidosInput.type = 'text';
    apellidosInput.placeholder = 'Introduce los apellidos';
    apellidosInput.className = 'apellidosInput';
    apellidosInput.autocomplete = 'family-name';
    apellidosInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Introduce el email';
    emailInput.className = 'emailInput';
    emailInput.autocomplete = 'email';
    emailInput.required = true;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Introduce la contraseña';
    passwordInput.className = 'passwordInput';
    passwordInput.autocomplete = 'new-password';
    passwordInput.required = true;

    const repeatPasswordInput = document.createElement('input');
    repeatPasswordInput.type = 'password';
    repeatPasswordInput.placeholder = 'Repite la contraseña';
    repeatPasswordInput.className = 'repeatPasswordInput';
    repeatPasswordInput.autocomplete = 'new-password';
    repeatPasswordInput.required = true;

    const balanceInicialInput = document.createElement('input');
    balanceInicialInput.type = 'number';
    balanceInicialInput.placeholder = 'Introduce el balance inicial';
    balanceInicialInput.className = 'balanceInicialInput';
    balanceInicialInput.min = '0';
    balanceInicialInput.step = '0.01';
    balanceInicialInput.required = true;

    const createButton = document.createElement('button');
    createButton.textContent = 'Crear Cuenta';
    createButton.className = 'createButton';
    createButton.type = 'submit';

    const loginRedirect = document.createElement('a');
    loginRedirect.href = '#login';
    loginRedirect.className = 'authRedirect';
    loginRedirect.textContent = '¿Ya tienes cuenta? Inicia sesión';
    loginRedirect.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.replaceChildren();
        loginUI();
    });

    registerForm.append(
        nombreInput,
        apellidosInput,
        emailInput,
        passwordInput,
        repeatPasswordInput,
        balanceInicialInput,
        createButton
    );
    authCard.append(authHeader, registerForm, loginRedirect);
    document.body.replaceChildren(authCard);

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (repeatPasswordInput.value !== passwordInput.value) {
            alert('Las contraseñas no coinciden');
            return;
        }
        if (createAccount(
                nombreInput.value.trim(),
                apellidosInput.value.trim(),
                emailInput.value.trim(),
                passwordInput.value.trim(),
                Number(balanceInicialInput.value)
            ) !== true) return;
        document.body.replaceChildren();
        dashboard();
    });
} 

/**
 * UI Login
 */
export function loginUI() {
    const authCard = document.createElement('main');
    authCard.className = 'authCard';

    const authHeader = document.createElement('header');
    authHeader.className = 'authHeader';

    const authEyebrow = document.createElement('p');
    authEyebrow.className = 'authEyebrow';
    authEyebrow.textContent = 'MONEY TRACK';

    const loginLabel = document.createElement('h1');
    loginLabel.innerText = 'Bienvenido de nuevo';
    loginLabel.className = 'loginLabel';

    const authDescription = document.createElement('p');
    authDescription.className = 'authDescription';
    authDescription.textContent = 'Inicia sesión para tener tus finanzas bajo control.';

    authHeader.append(authEyebrow, loginLabel, authDescription);

    const loginForm = document.createElement('form');
    loginForm.className = 'authForm';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Introduce el email';
    emailInput.className = 'emailInput';
    emailInput.autocomplete = 'email';
    emailInput.required = true;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Introduce la contraseña';
    passwordInput.className = 'passwordInput';
    passwordInput.autocomplete = 'current-password';
    passwordInput.required = true;

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Iniciar sesión';
    loginButton.className = 'loginButton';
    loginButton.type = 'submit';

    const registerRedirectLink = document.createElement('a');
    registerRedirectLink.href = '#register';
    registerRedirectLink.className = 'authRedirect';
    registerRedirectLink.textContent = '¿No tienes cuenta? Regístrate';
    registerRedirectLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.replaceChildren();
        registerUI();
    });

    loginForm.append(emailInput, passwordInput, loginButton);
    authCard.append(authHeader, loginForm, registerRedirectLink);
    document.body.replaceChildren(authCard);

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (loginAccount(emailInput.value.trim(), passwordInput.value.trim()) !== true) {
            alert("Usuario no encontrado!");
            return;
        }
        document.body.replaceChildren();
        dashboard();
    });
}



export function dashboard() {
    
}