import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/topic';

import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddCommentForm = ({ topicId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <h3>Ajouter une réponse :</h3>

      <Form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(topicId, { text });
          setText('');
        }}
      >
        <FormGroup>
          <Input
            type='textarea'
            name='text'
            rows='5'
            value={text}
            placeholder='Ajouter une réponse'
            onChange={e => setText(e.target.value)}
            required
          />
        </FormGroup>

        <Button type='submit' color='success'>
          Ajouter la réponse
        </Button>
      </Form>
    </Fragment>
  );
};

AddCommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(AddCommentForm);
