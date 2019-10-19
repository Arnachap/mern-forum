import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSections } from '../../actions/section';
import { getForums } from '../../actions/forum';

import { Spinner } from 'reactstrap';
import Section from './Section';

const Forums = ({
  getSections,
  getForums,
  forum,
  section: { sections, loading }
}) => {
  useEffect(() => {
    getSections();
    getForums();
  }, [getSections, getForums]);

  return loading ? (
    <Spinner color='info' className='d-block m-auto' />
  ) : (
    <div>
      <h2 className='title'>Forums</h2>

      {sections.map(section => (
        <Section key={section._id} section={section} forum={forum} />
      ))}
    </div>
  );
};

Forums.propTypes = {
  getSections: PropTypes.func.isRequired,
  getForums: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  section: state.section,
  forum: state.forum
});

export default connect(
  mapStateToProps,
  { getSections, getForums }
)(Forums);
