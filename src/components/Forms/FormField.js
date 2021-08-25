import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFormikContext } from 'formik';

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: '#FFF !important',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `1px solid ${theme.palette.primary.danger} !important`,
      },
    },
  },
  focused: {
    backgroundColor: '#FFF !important',
  },
  formField: {
    marginBottom: '35px',
  },
  inputContainer: {
    backgroundColor: '#EDF1F5',
    borderRadius: '14px',
  },
}));

const FormField = ({ name, label, type = 'text' }) => {
  const {
    errors,
    setFieldTouched,
    setFieldValue,
    touched,
  } = useFormikContext();

  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);

  const inputClasses = [classes.inputContainer];
  if (isFocused) inputClasses.push(classes.focused);

  return (
    <div className={classes.formField}>
      <TextField
        className={
          errors[name] && touched[name] && isFocused ? classes.error : ''
        }
        color="secondary"
        error={errors[name] && touched[name] ? true : false}
        fullWidth
        InputProps={{ className: inputClasses.join(' ') }}
        onFocus={() => setIsFocused(true)}
        label={label}
        onBlur={() => {
          setFieldTouched(name);
          setIsFocused(false);
        }}
        onChange={(event) => setFieldValue(name, event.target.value)}
        type={type}
        variant="outlined"
      />
    </div>
  );
};

export default FormField;
