import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

const Forum = ({ forum: { title, subforums } }) => {
  return (
    <div>
      <Card className='my-3 '>
        <CardHeader>{title}</CardHeader>
        {subforums.map(subforum => (
          <CardBody>
            <CardText>{subforum.title}</CardText>
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
