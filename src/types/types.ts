/**
 * Interfaces y Tipos
 * @author IkerOwO
 */

/**
 * Intefaz de cuenta
 */
export interface Account {
    readonly id: number,
    name: string,
    surname: string,
    email: string,
    password: string,
    account_created_at: number, // en la funcion se pondra la fecha automaticamente
    initial_balance: number
}

/**
 * Tipo e interfaz de transacciones
 */
export type TransactionType = "ingreso" | "retiro";

export interface Transaction {
    readonly id: number,
    transactionDescription?: string,
    amount: number;
    type: TransactionType;
    category?: string;
    date: Date; // se pondra la fecha automaticamente
}
