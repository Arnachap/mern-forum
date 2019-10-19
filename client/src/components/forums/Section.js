import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const Section = ({ forum: { forums }, section: { _id, title } }) => {
  return (
    <div>
      <Card className='my-3 '>
        <CardHeader className='bg-info text-white'>{title}</CardHeader>

        {forums.map(forum => {
          if (forum.section === _id)
            return (
              <CardBody>
                <CardTitle>
                  <Link to={`/forums/${title}/${forum._id}`}>
                    {forum.title}
                  </Link>
                </CardTitle>
                <CardText>{forum.description}</CardText>
              </CardBody>
            );
        })}

        {/* {forums.map(forum => (
          
          <CardBody>
            <CardTitle>
              <Link to={`/forums/${title}/${forum._id}`}>{forum.title}</Link>
            </CardTitle>
            <CardText>{forum.description}</CardText>
          </CardBody>
        ))} */}
      </Card>
    </div>
  );
};

Section.propTypes = {
  section: PropTypes.object.isRequired,
  forum: PropTypes.object.isRequired
};

export default Section;
