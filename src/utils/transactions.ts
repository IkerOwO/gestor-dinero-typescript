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

export default function createAccount(name: string, surname: string, initial_balance: number): string {
    const account: Account = {
        id: accountId++,
        name: name,
        surname: surname,
        account_created_at: now,
        initial_balance: initial_balance
    };

    // Guardamos el usuario a LocalStorage
    saveAccountOnLocalStorage(account);

    return "¡Se ha guardado el usuario con exito!";
}