import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Register from '../auth/Register';

const RegisterModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='float-right'>
      <Button color='success' className='m-2' onClick={toggle}>
        <i className='material-icons'>person_add</i> Inscription
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Inscription</ModalHeader>
        <ModalBody>
          <Register />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
