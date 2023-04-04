import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'reline';
import { Box, config } from './index';

const style = {
  root: {
    position: 'relative',
    width: 16,
    height: 16,
    verticalAlign: 'middle',
    alignSelf: 'center',
  },
  input: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
    ':focus ~ div': {
      boxShadow: `0 0 0 2px ${config.colors.blue}`,
    },
  },
  box: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: 16,
    height: 16,
    color: 'currentcolor',
    transition: 'background-color .1s ease-out',
  },
  check: {
    margin: 2,
    display: 'block',
    color: config.colors.white,
  },
};

const check = (
  <Line
    size={12}
    style={style.check}
    path={[
      [ 2, 7 ],
      [ 8, 12 ],
      [ 16, 3 ],
    ]}
  />
);

const Checkbox = (props) => {
  const {
    id,
    name,
    checked,
    value,
    defaultValue,
    onClick,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const inputProps = {
    id,
    name,
    checked,
    value,
    defaultValue,
    onClick,
    onChange,
    onFocus,
    onBlur,
  };

  return (
    <Box
      display="inline-block"
      blue
      {...props}
      css={style.root}
    >
      <Box
        is="input"
        type="checkbox"
        {...inputProps}
        css={style.input}
      />
      <Box
        rounded
        css={{
          ...style.box,
          backgroundColor: checked ? 'currentcolor' : config.colors.gray3,
        }}
      >
        {checked && check}
      </Box>
    </Box>
  );
};

Checkbox.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  name: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  defaultValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
