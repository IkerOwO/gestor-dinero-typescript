/**
 * Funciones lógicas
 * @author IkerOwO
 */

import type { 
    Account, 
    TransactionType, 
    Transaction 
} from '../types/types'

import { saveAccountOnLocalStorage } from './storage'

let accountId = 0;
let now = Date.now();

/**
 * Funcion para crear una cuenta
 * @param name nombre del usuario
 * @param surname apellido
 * @param password contraseña 
 * @param initial_balance balance inicial
 * @returns mensaje de confirmacion
 */
export function createAccount(name: string, surname: string, email: string, password: string, initial_balance: number): string {
    const account: Account = {
        id: accountId++,
        name: name,
        surname: surname,
        email: email,
        password: password,
        account_created_at: now,
        initial_balance: initial_balance
    };

    // Guardamos el usuario a LocalStorage
    saveAccountOnLocalStorage(account);

    return "¡Se ha guardado el usuario con exito!";
}

/**
 * Funcion para el login del usuario
 * @param name nombre del usuario
 * @param password contraseña del usuario
 * @returns true si el usuario existe | false si el usuario no existe
 */
export function loginAccount(email: string, password: string): boolean {
    const cuenta = JSON.parse(localStorage.getItem('account') ?? '{}') as Account;
    if (cuenta.password === password && cuenta.email === email) {
        return true;
    }
    return false;
}