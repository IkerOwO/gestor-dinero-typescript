/**
 * Interfaz gráfica
 * @author IkerOwO
 */

import createAccount from './utils/transactions'

/**
 * UI Registro
 */
export function registerUI() {
    const loginLabel = document.createElement('h1');
    loginLabel.innerText = 'Login';
    loginLabel.className = 'loginLabel';

    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.placeholder = 'Introduce el nombre';
    nombreInput.className = 'nombreInput';

    const apellidosInput = document.createElement('input');
    apellidosInput.type = 'text';
    apellidosInput.placeholder = 'Introduce los apellidos';
    apellidosInput.className = 'apellidosInput';

    const balanceInicialInput = document.createElement('input');
    balanceInicialInput.type = 'number';
    balanceInicialInput.placeholder = 'Introduce el balance inicial';
    balanceInicialInput.className = 'balanceInicialInput';

    const createButton = document.createElement('button');
    createButton.textContent = 'Crear Cuenta';
    createButton.className = 'createButton';

    // Agregamos todo al body
    document.body.appendChild(loginLabel);
    document.body.appendChild(nombreInput);
    document.body.appendChild(apellidosInput);
    document.body.appendChild(balanceInicialInput);
    document.body.appendChild(createButton);
    
    // Texto de los inputs
    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const balanceInicial = Number(balanceInicialInput.value.trim()); // de string a number

    // Agregamos el EventListener al boton de crear cuenta
    createButton.addEventListener('click', () => {
        createAccount(nombre, apellidos, balanceInicial);
    });
} 

/**
 * UI Login
 */
export function loginUI() {
    
}