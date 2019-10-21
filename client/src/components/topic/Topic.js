import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopic } from '../../actions/topic';

import { Spinner } from 'reactstrap';

const Topic = ({ getTopic, topic: { topic, loading }, match }) => {
  useEffect(() => {
    getTopic(match.params.id);
  }, [getTopic]);
  return loading || topic === null ? <Spinner /> : <h1>{topic.title}</h1>;
};

Topic.propTypes = {
  getTopic: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  topic: state.topic
});

export default connect(
  mapStateToProps,
  { getTopic }
)(Topic);
