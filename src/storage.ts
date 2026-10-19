/**
 * Archivo para guardar en localstorage
 * @author IkerOwO
 */

import type { Account } from "./types";

/**
 * Funcion para guardar una cuenta en localstorage
 * @param account cuenta pasada por parametro
 */
export default function saveAccountOnLocalStorage(account: Account) {
    localStorage.setItem('account', JSON.stringify(account));
}


