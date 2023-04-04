import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'axs';

const Heading = props => (
  <Text
    bold
    css={{ ...props.css, lineHeight: 1.2 }}
    {...props}
  />
);

Heading.propTypes = {
  css: PropTypes.object,
};

Heading.displayName = 'Heading';

export default Heading;
