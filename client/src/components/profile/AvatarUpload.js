import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadAvatar } from '../../actions/auth';

import { Button, Form, FormGroup, CustomInput } from 'reactstrap';

const AvatarUpload = ({ uploadAvatar }) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Sélectionner un fichier...');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    uploadAvatar(formData);
  };

  return (
    <Fragment>
      <h3>Modifier votre avatar :</h3>
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <CustomInput
            onChange={onChange}
            type='file'
            name='file'
            id='file'
            label={filename}
          />
        </FormGroup>

        <Button type='submit' color='success'>
          Modifier mon avatar
        </Button>
      </Form>
    </Fragment>
  );
};

AvatarUpload.propTypes = {
  uploadAvatar: PropTypes.func.isRequired
};

export default connect(
  null,
  { uploadAvatar }
)(AvatarUpload);
