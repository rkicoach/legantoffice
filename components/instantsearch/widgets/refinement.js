import React from 'react';
import PropTypes from 'prop-types';
import { titleCase } from '../../../lib/helpers';
import { Box, Heading } from '../../base';

const Refinement = ({ title, children }) => (
  <Box mb3>
    <Heading
      is="h5"
      mb1
      fontSize={4}
    >
      {titleCase(title.replace(/_/g, ' '))}
    </Heading>
    {children}
  </Box>
);

Refinement.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Refinement;
