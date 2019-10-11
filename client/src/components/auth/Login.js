import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { CardBody } from 'reactstrap';

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
      <form className='form' onSubmit={e => onSubmit(e)}>
        <CardBody className='card-body'>
          <div className='form-group has-info'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <i className='material-icons'>email</i>
                </div>
              </div>
              <input
                type='email'
                className='form-control'
                placeholder='Email...'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div>
          </div>

          <div className='form-group has-info'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <i className='material-icons'>lock_outline</i>
                </div>
              </div>
              <input
                type='password'
                placeholder='Mot de passe...'
                className='form-control'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                minLength='6'
              />
            </div>
          </div>

          <input
            type='submit'
            className='btn btn-info btn-wd btn-lg d-block m-auto'
            value='Login'
          />
        </CardBody>
      </form>
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
