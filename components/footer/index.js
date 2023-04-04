import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '../base';
import { themeColors } from '../../styles';
import FooterInfo from './footer-info';

const styles = {
  root: {
    backgroundColor: '#11416b',
    width:'100%',
    padding:'0 0 60px 0',
    float:'left',
  },
  inner: {
    maxWidth: '77em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const Footer = () => (
  <Box
    is="footer"
    css={styles.root}
  >
    <Box
      px1
      py4
      css={styles.inner}
    >
      <FooterInfo />
    </Box>
  </Box>
);

export default Footer;
