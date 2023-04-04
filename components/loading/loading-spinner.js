import React from 'react';
import PropTypes from 'prop-types';
import LogoStar from '../../svgs/logo-star.svg';
import { Box, Flex, Text } from '../base';
import { themeColors, transitions } from '../../styles';

const styles = {
  root: {
    height: '100%',
    width: '100%',
  },
  spinner: {
    height: 64,
    width: 64,
    opacity: 0.8,
    animation: `loading-spinner 1200ms ${transitions.easing} infinite`,
  },
};

const LoadingSpinner = ({ message }) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    css={styles.root}
  >
    <Box
      is={LogoStar}
      css={styles.spinner}
    />
    <Text
      color={themeColors.primary}
      mt2
      fontSize={3}
    >
      {message}
    </Text>
  </Flex>
);

LoadingSpinner.propTypes = {
  message: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  message: 'Loading',
};

export default LoadingSpinner;
