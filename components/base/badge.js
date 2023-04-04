import React from 'react';
import PropTypes from 'prop-types';
import { themeColors } from '../../styles';
import { Box } from './index';

const styles = {
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '99999px',
    height: 'inherit',
  },
};

const Badge = props => (
  <Box
    color={themeColors.subtle}
    backgroundColor={themeColors.light}
    fontSize={6}
    px1
    bold
    {...props}
    css={{ ...styles.root, ...props.css }}
  >
    {props.children}
  </Box>
);

Badge.propTypes = {
  children: PropTypes.node,
  css: PropTypes.object,
};

Badge.displayName = 'Badge';

export default Badge;
