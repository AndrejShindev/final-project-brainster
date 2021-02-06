import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.css';


const JoinModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='JoinModal'>
            <Button className="joinButton" onClick={handleShow}>
                <FontAwesomeIcon icon='plus' />
                 Приклучи се
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="header" closeButton>
                    <Modal.Title>
                        Приклучи се
                    </Modal.Title>
                    <FontAwesomeIcon icon='times-circle' onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Form  onSubmit={(e) => submitHandler(e)} method='post'>
                        <Form.Group controlId="name">
                            <Form.Label>Име и Презиме(*задолжително поле)
                            </Form.Label>
                            <Form.Control type="text" placeholder="Име и Презиме" />
                        </Form.Group>
                        <Form.Group controlId="mail">
                            <Form.Label>Emаil (*задолжително поле)
                            </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <span style={{ marginTop: '20px' }}>
                            <Button className="turn-off mr-2" onClick={handleClose}>
                                ИСКЛУЧИ
                            </Button>
                            <Button className="joinButtonSubmit" type='submit'>
                                ИСПРАТИ ФОРМА
                                <FontAwesomeIcon icon='arrow-right' />
                            </Button>
                        </span>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default JoinModal;