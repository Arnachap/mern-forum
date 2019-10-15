import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Input
            type='email'
            placeholder='Email...'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type='password'
            placeholder='Mot de passe...'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </FormGroup>

        <Button type='submit' color='info' className='d-block m-auto'>
          Connexion
        </Button>
      </Form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
