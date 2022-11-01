import { ModalOverlay } from "./ModalOverlay";
import { ModalDialog } from "./ModalDialog";
import styles from './Modal.module.css'

const Modal = (props) => 
{
    const handleClose = () => {
        props.onClose()
    }
    if(!props.onError)
        return
    return (
        <ModalOverlay>
            <ModalDialog>
                <div className={styles.header}>Error</div>
                <div className={styles.body}>
                    <ul>
                        {props.children.map(err => 
                        {
                            return <li key={err.id}>{err.message}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleClose} className={styles.button}>Close</button>
                </div>
            </ModalDialog>
        </ModalOverlay>
    )
}

export default Modal;