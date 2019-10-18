import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getForum } from '../../actions/forum';

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

const Subforum = ({ getForum, forum: { forum, loading }, match }) => {
  useEffect(() => {
    getForum(match.params.title, match.params.id);
  }, [getForum]);

  return loading ? (
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
        <CardBody>
          <CardTitle>
            <Link to='/'>fdsfsdfs</Link>
          </CardTitle>
          <CardText>sqdqsdf</CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
};

Subforum.propTypes = {
  getForum: PropTypes.func.isRequired,
  forum: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  { getForum }
)(Subforum);
