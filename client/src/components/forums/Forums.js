import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSections } from '../../actions/section';

import { Spinner } from 'reactstrap';
import Section from './Section';

const Forums = ({ getSections, section: { sections, loading } }) => {
  useEffect(() => {
    getSections();
  }, [getSections]);

  return loading ? (
    <Spinner color='info' className='d-block m-auto' />
  ) : (
    <div>
      <h2 className='title'>Forums</h2>

      {sections.map(section => (
        <Section key={section._id} section={section} />
      ))}
    </div>
  );
};

Forums.propTypes = {
  getSections: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  section: state.section
});

export default connect(
  mapStateToProps,
  { getSections }
)(Forums);
