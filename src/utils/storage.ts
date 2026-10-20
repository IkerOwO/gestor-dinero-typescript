/**
 * Archivo para guardar en localstorage
 * Mas adelante cambiare localstorage por una bbdd en mySQL
 * @author IkerOwO
 */

import type { Account } from "../types/types";

/**
 * Funcion para guardar una cuenta en localstorage
 * @param account cuenta pasada por parametro
 */
export function saveAccountOnLocalStorage(account: Account): void {
    localStorage.setItem('account', JSON.stringify(account));
}

/**
 * Funcion para leer de localstorage la cuenta
 * @returns cuenta 
 */
export function readAccountFromLocalStorage(): Account | undefined {
    const cuenta = JSON.parse(localStorage.getItem('account') ?? '{}') as Account;
    return cuenta;
}

