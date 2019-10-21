import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getForum } from '../../actions/forum';
import { getTopics } from '../../actions/topic';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Spinner,
  Pagination,
  PaginationItem,
  PaginationLink
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
      <Card className='my-3 '>
        <CardHeader className='bg-info text-white'>
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href='#' />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href='/'>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href='/'>2</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href='/'>3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink next href='#' />
            </PaginationItem>
          </Pagination>
        </CardHeader>
        {topics.map(topic => (
          <CardBody>
            <CardTitle>
              <Link to='/'>{topic.title}</Link>
            </CardTitle>
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
  Topic: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forum: state.forum,
  topic: state.topic
});

export default connect(
  mapStateToProps,
  { getForum, getTopics }
)(Forum);
