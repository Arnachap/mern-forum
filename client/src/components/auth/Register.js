import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Mots de passe différents', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Input
            type='text'
            class='form-control'
            placeholder='Pseudo...'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type='email'
            className='form-control'
            placeholder='Email...'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type='password'
            placeholder='Mot de passe...'
            className='form-control'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type='password'
            placeholder='Confirmez mot de passe...'
            className='form-control'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </FormGroup>

        <Button type='submit' color='success' className='d-block m-auto'>
          Inscription
        </Button>
      </Form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Register);
