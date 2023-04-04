import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'axs';

const styles = {
  maxWidth: '68em',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Container = ({ css, ...props }) => (
  <Box
    {...props}
    css={{ ...styles, ...css }}
  />
);

Container.propTypes = {
  css: PropTypes.object,
};

Container.displayName = 'Container';

export default Container;
