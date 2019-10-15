import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Login from '../auth/Login';

const LoginModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='float-left'>
      <Button color='info' className='m-2' onClick={toggle}>
        <i className='material-icons'>person</i> Connexion
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Connexion</ModalHeader>

        <ModalBody>
          <Login />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
