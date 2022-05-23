import React from 'react';
import PropTypes from 'prop-types';
import usePromise from '../hooks/usePromise';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

const CustomButton = ({ loading, onClick, style, className, ...rest }) => {
  const [isLoading, handler] = usePromise(onClick, loading);
  return (
    <LoadingButton
      loading={isLoading}
      disabled={isLoading}
      onClick={handler}
      variant="contained"
      color="primary"
      {...rest}
    />
  );
};

const StyledButton = styled(CustomButton)`
  position: relative;
  button {
    margin: 8px;
  }
  .icon-left {
    margin-right: 8px;
  }
  .icon-right {
    margin-left: 8px;
  }
  .progress {
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
  }
`;

StyledButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CustomButton;