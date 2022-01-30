import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeImag from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionMOdalProps {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionMOdalProps){
    const {createTransaction} = useContext(TransactionsContext)

    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type,
        })
        
    }

    
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button className="react-modal-close" type="button" onClick={onRequestClose}>
                <img src={closeImag} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)} 
                />

                <input 
                    placeholder="Valor" 
                    type="number" 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    
                    placeholder="Categoria" 
                    value={category}
                    onChange={value => setCategory(value.target.value)}
                />   

                <button  type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}