

import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styles';

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;
