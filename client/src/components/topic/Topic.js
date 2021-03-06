import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopic } from '../../actions/topic';
import Moment from 'react-moment';

import { Card, CardBody, CardText, Spinner } from 'reactstrap';
import AddCommentForm from './AddCommentForm';

const Topic = ({ getTopic, topic: { topic, loading }, match }) => {
  useEffect(() => {
    getTopic(match.params.id);
  }, [getTopic]);

  return loading || topic === null ? (
    <Spinner color='info' className='d-block m-auto' />
  ) : (
    <Fragment>
      <h2 className='title'>{topic.title}</h2>

      <small>
        Posté par {topic.name}, <Moment fromNow>{topic.date}</Moment>
      </small>

      <Card className='mb-2'>
        <div className='row'>
          <div className='col-md-2'>
            <img src={topic.avatar} className='card-img' alt='' />
          </div>

          <div className='col-md-10'>
            <CardBody>
              <CardText>{topic.text}</CardText>
            </CardBody>
          </div>
        </div>
      </Card>

      {topic.comments.map(comment => {
        return (
          <Card className='mb-2'>
            <div className='row'>
              <div className='col-md-2'>
                <img src={comment.avatar} className='card-img' alt='' />
              </div>

              <div className='col-md-10'>
                <CardBody>
                  <CardText>{comment.text}</CardText>
                </CardBody>
              </div>
            </div>
          </Card>
        );
      })}

      <AddCommentForm topicId={topic._id} />
    </Fragment>
  );
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
