import React, { Component } from 'react';
import { Button, Modal, ModalBody, Card } from 'reactstrap';
import Login from '../auth/Login';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className='float-left'>
        <Button type='button' className='btn btn-info' onClick={this.toggle}>
          <i className='material-icons'>person_add</i> Connexion
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Card className='card-signup card-plain'>
            <div className='modal-header'>
              <div className='card-header card-header-info text-center w-100'>
                <h4 className='card-title'>CONNEXION</h4>
              </div>
            </div>
          </Card>
          <ModalBody>
            <Login />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
