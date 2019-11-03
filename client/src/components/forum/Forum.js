import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getForum } from '../../actions/forum';
import { getTopics } from '../../actions/topic';

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Spinner,
  Button
} from 'reactstrap';

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

      <Link to={`/new-topic/${forum._id}`}>
        <Button color='success'>Nouveau sujet</Button>
      </Link>

      <Card className='my-3'>
        {topics.map(topic => (
          <div className='row'>
            <div className='col-md-2'>
              <img src={topic.avatar} className='card-img' alt='' />
            </div>

            <div className='col-md-10'>
              <CardBody>
                <CardTitle>
                  <Link to={`/topic/${topic._id}`}>{topic.title}</Link>
                </CardTitle>
                <CardText>
                  Posté <Moment fromNow>{topic.date}</Moment> par {topic.name}
                </CardText>
              </CardBody>
            </div>
          </div>
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
