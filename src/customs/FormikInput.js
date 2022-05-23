import * as React from 'react';
import { getIn } from 'formik';
import MuiTextField from '@mui/material/TextField';

export function fieldToTextField({
  disabled,
  field,
  form: { isSubmitting, touched, errors },
  ...props
}) {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled ?? isSubmitting,
    variant: props.variant,
    margin: 'normal',
    fullWidth: true,
    ...props,
  };
}

export default function TextField({ children, ...props }) {
  return <MuiTextField {...fieldToTextField(props)}>{children}</MuiTextField>;
}