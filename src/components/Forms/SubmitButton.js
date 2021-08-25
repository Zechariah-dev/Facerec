import React from 'react';
import { useFormikContext } from 'formik';

// components
import AppButton from '../Button/Button';

const SubmitButton = ({ children }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton onClick={handleSubmit}>{children}</AppButton>;
};

export default SubmitButton;
