import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getForum } from '../../actions/forum';
import { getTopics } from '../../actions/topic';

import { Card, CardBody, CardText, CardTitle, Spinner } from 'reactstrap';

const Forum = ({
  getForum,
  getTopics,
  forum: { forum, loading },
  topic: { topics },
  match
}) => {
  useEffect(() => {
    getForum(match.params.id);
    getTopics(match.params.id);
  }, [getForum, getTopics]);

  return loading || forum === null ? (
    <Spinner color='info' className='d-block m-auto' />
  ) : (
    <Fragment>
      <h2 className='title'>{forum.title}</h2>
      <Card className='my-3 '>
        {topics.map(topic => (
          <CardBody>
            <CardTitle>
              <Link to={`/topic/${topic._id}`}>{topic.title}</Link>
            </CardTitle>
            <CardText>
              Posté le <Moment format='DD/MM/YYYY'>{topic.date}</Moment> par{' '}
              {topic.name}
            </CardText>
          </CardBody>
        ))}
      </Card>
    </Fragment>
  );
};

Forum.propTypes = {
  getForum: PropTypes.func.isRequired,
  forum: PropTypes.object.isRequired,
  getTopics: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forum: state.forum,
  topic: state.topic
});

export default connect(
  mapStateToProps,
  { getForum, getTopics }
)(Forum);
