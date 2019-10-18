import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const Forum = ({ forum: { title, subforums } }) => {
  return (
    <div>
      <Card className='my-3 '>
        <CardHeader className='bg-info text-white'>{title}</CardHeader>
        {subforums.map(subforum => (
          <CardBody>
            <CardTitle>
              <Link to={`/forums/${title}/${subforum._id}`}>
                {subforum.title}
              </Link>
            </CardTitle>
            <CardText>{subforum.description}</CardText>
          </CardBody>
        ))}
      </Card>
    </div>
  );
};

Forum.propTypes = {
  forum: PropTypes.object.isRequired
};

export default Forum;
