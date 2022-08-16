import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ConfirmModal = ({handleClose, showValid, showInvalid, validText, invalidText}) =>{
    return(
        <div>
            <Modal show={showValid} onHide={handleClose} centered>
                <Modal.Body >
                    <div className="valid-modal">
                        <div><FontAwesomeIcon icon={faCheckCircle}/></div>
                        <h2>{validText}</h2>
                        <Button className="btn-success" onClick={handleClose}>Close</Button> 
                    </div>
                </Modal.Body> 
            </Modal>

            <Modal show={showInvalid} onHide={handleClose} centered>
                <Modal.Body >
                    <div className="invalid-modal">
                        <div><FontAwesomeIcon icon={faCircleXmark}/></div>
                        <h2>{invalidText}</h2>
                        <Button className="btn-danger" onClick={handleClose}>Close</Button> 
                    </div>
                </Modal.Body> 
            </Modal>
        </div>
    )
}

export const SuccessModal = ({handleClose, showValid}) =>{
    return(
        <div>
            <Modal show={showValid} onHide={handleClose} centered>
                <Modal.Body >
                    <div className="valid-modal">
                        <div><FontAwesomeIcon icon={faCheckCircle}/></div>
                        <h2>Promotion code was apply</h2>
                        <Button className="btn-success" onClick={handleClose}>Close</Button> 
                    </div>
                </Modal.Body> 
            </Modal> 
        </div>
    )
}