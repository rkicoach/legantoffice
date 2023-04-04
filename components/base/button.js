import React from 'react';
import PropTypes from 'prop-types';
import { themeColors, transitions } from '../../styles';
import { Box } from './index';

const style = {
  fontFamily: 'inherit',
  margin: 0,
  padding: 0,
  border: '1px solid transparent',
  textDecoration: 'none',
  boxShadow: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.5,
    transition: `opacity ${transitions.duration} ${transitions.easing}`,
  },
  ':focus': {
    opacity: 0.8,
    transition: `opacity ${transitions.duration} ${transitions.easing}`,
  },
  ':active': {
    opacity: 0.8,
    transition: `opacity ${transitions.duration} ${transitions.easing}`,
  },
};

const Button = ({ notBold, css, ...props }) => (
  <Box
    py1
    px2
    rounded
    fontSize={6}
    color={themeColors.action}
    backgroundColor={themeColors.light}
    is="button"
    css={{
      ...style,
      ...css,
      fontWeight: notBold ? '400' : '700',
    }}
    {...props}
  />
);

Button.propTypes = {
  notBold: PropTypes.bool,
  css: PropTypes.object,
};

Button.displayName = 'Button';

export default Button;
