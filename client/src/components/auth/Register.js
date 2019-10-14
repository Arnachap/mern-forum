import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { CardBody } from 'reactstrap';

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
      <form className='form' onSubmit={e => onSubmit(e)}>
        <CardBody className='card-body'>
          <div class='form-group has-success'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <div class='input-group-text'>
                  <i class='material-icons'>face</i>
                </div>
              </div>
              <input
                type='text'
                class='form-control'
                placeholder='Pseudo...'
                name='name'
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
          </div>

          <div className='form-group has-success'>
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
              />
            </div>
          </div>

          <div className='form-group has-success'>
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
              />
            </div>
          </div>

          <div className='form-group has-success'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <i className='material-icons'>lock_outline</i>
                </div>
              </div>
              <input
                type='password'
                placeholder='Confirmez mot de passe...'
                className='form-control'
                name='password2'
                value={password2}
                onChange={e => onChange(e)}
              />
            </div>
          </div>

          <input
            type='submit'
            className='btn btn-success btn-wd btn-lg d-block m-auto'
            value='Register'
          />
        </CardBody>
      </form>
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
