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
        <div>
          <h1>{user.name}</h1>
          <img src={user.avatar} alt='' />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);
