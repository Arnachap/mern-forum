import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTopic } from '../../actions/topic';

import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddTopic = ({ addTopic, match, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: ''
  });

  const { title, text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addTopic(match.params.id, formData, history);
  };

  return (
    <div>
      <h2 className='title'>Ajouter un sujet</h2>

      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Input
            type='text'
            placeholder='Titre du sujet'
            name='title'
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            placeholder='Texte du sujet'
            name='text'
            value={text}
            onChange={e => onChange(e)}
          />
        </FormGroup>

        <Button type='submit' color='success'>
          Ajouter le sujet
        </Button>
      </Form>
    </div>
  );
};

AddTopic.propTypes = {
  addTopic: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTopic }
)(withRouter(AddTopic));
