import { useState } from "react";
import Modal from "react-modal";
import closeImag from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionMOdalProps {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionMOdalProps){

    const [type, setType] = useState("deposit")

    
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

            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título" 
                />

                <input 
                    placeholder="Valor" 
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
                    type="number" 
                    placeholder="Categoria" 
                />   

                <button  type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}