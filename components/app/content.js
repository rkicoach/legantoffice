import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../base';

const Content = ({ children }) => (
  <Container p0>
    {children}
  </Container>
);

Content.propTypes = {
  children: PropTypes.node,
};

Content.displayName = 'Content';

export default Content;
