import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transacion {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string
    createdAt: string
}

type TransactionIput = Omit<Transacion, "id" | "createdAt">

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transacion[]
    createTransaction: (transaction: TransactionIput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}: TransactionsProviderProps ) {
    const [transactions, setTransactions] = useState<Transacion[]>([])


    useEffect(() => {
        api.get("/transactions")
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: TransactionIput) {
        

        api.post("transaction", transaction)
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}

        </TransactionsContext.Provider>
    )
}
