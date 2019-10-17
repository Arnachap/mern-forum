import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForums } from '../../actions/forum';

import Forum from './Forum';
import { Spinner } from 'reactstrap';

const Forums = ({ getForums, forum: { forums, loading } }) => {
  useEffect(() => {
    getForums();
  }, [getForums]);

  return loading ? (
    <Spinner color='info' className='d-block m-auto' />
  ) : (
    <div>
      <h2 className='title'>Forums</h2>

      {forums.map(forum => (
        <Forum key={forum._id} forum={forum} />
      ))}
    </div>
  );
};

Forums.propTypes = {
  getForums: PropTypes.func.isRequired,
  forum: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  { getForums }
)(Forums);
