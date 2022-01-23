import Modal from "react-modal";
import closeImag from "../../assets/close.svg"
import { Container } from "./styles";

interface NewTransactionMOdalProps {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionMOdalProps){

    
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

                <input
                    type="number" 
                    placeholder="Categoria" 
                />   

                <button  type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}