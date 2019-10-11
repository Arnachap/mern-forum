import React, { Component } from 'react';
import { Button, Modal, ModalBody, Card } from 'reactstrap';
import Register from '../auth/Register';

class RegisterModal extends Component {
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
      <div className='float-right'>
        <Button type='button' className='btn btn-success' onClick={this.toggle}>
          <i className='material-icons'>person_add</i> Inscription
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Card className='card-signup card-plain'>
            <div toggle={this.toggle} className='modal-header'>
              <div className='card-header card-header-success text-center w-100'>
                <h4 className='card-title'>INSCRIPTION</h4>
              </div>
            </div>
          </Card>
          <ModalBody>
            <Register />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
