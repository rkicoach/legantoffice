import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from '../base';
import LoadingSpinner from './loading-spinner';

const LoadingOverlay = ({ isLoading, message }) => (
  <Overlay
    isOpen={isLoading}
    onDismiss={() => {}}
  >
    <LoadingSpinner message={message} />
  </Overlay>
);

LoadingOverlay.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoadingOverlay;
