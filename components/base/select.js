import React from 'react';
import PropTypes from 'prop-types';
import { Chevron } from 'reline';
import { themeColors } from '../../styles';
import { Box, Label } from './index';

const styles = {
  root: {
    position: 'relative',
  },
  select: {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    padding: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: '1px solid',
    boxShadow: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    paddingRight: 24,
    ':focus': {
      outline: 'none',
      borderColor: themeColors.action,
    },
  },
  chevron: {
    position: 'absolute',
    top: '50%',
    right: 0,
    marginRight: 8,
    transform: 'translateY(-50%)',
  },
};

const SmallChevron = props => <Chevron {...props} down size={12} />;

const Select = props => (
  <Box css={styles.root}>
    {props.label && (
      <Label
        htmlFor={props.name}
        mr1
      >
        {props.label}
      </Label>
    )}
    <Box
      is="select"
      css={styles.select}
      width={1}
      rounded
      border
      borderGray3
      {...props}
    />
    <Box
      is={SmallChevron}
      css={styles.chevron}
    />
  </Box>
);

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

Select.displayName = 'Select';

export default Select;
