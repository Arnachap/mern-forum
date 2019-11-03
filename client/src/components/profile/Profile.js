import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AvatarUpload from './AvatarUpload';
import { Spinner } from 'reactstrap';

const Profile = ({ auth: { user, loading } }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner className='d-block m-auto' color='info' />
      ) : (
        <div>
          <h1 className='text-center'>{user.name}</h1>
          <img src={user.avatar} className='img-fluid' alt='' />
          <AvatarUpload />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);
