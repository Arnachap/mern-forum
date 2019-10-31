import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { logout } from '../../actions/auth';

import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';

const Header = ({ auth: { isAuthenticated, user }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <a onClick={logout} href='#!' className='text-white'>
      <i className='material-icons'>exit_to_app</i>
    </a>
  );

  const guestLinks = (
    <Fragment>
      <LoginModal />
      <RegisterModal />
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand href='/'>MERN Forum</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/'>Forum</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/'>Membres</NavLink>
            </NavItem>

            {isAuthenticated && user !== null ? (
              <NavItem>
                <NavLink href={`/user/${user._id}`}>{user.name}</NavLink>
              </NavItem>
            ) : null}
          </Nav>
          <div className='ml-auto'>
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          </div>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
