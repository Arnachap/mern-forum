import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'reactstrap';

const Profile = ({ auth: { user, loading } }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner className='d-block m-auto' color='info' />
      ) : (
        <h1>{user.name}</h1>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);
