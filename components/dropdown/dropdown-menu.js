import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../base';
import { themeColors, shadows } from '../../styles';
import DropdownRegistry from './dropdown-registry';

const before = {
  content: '""',
  display: 'block',
  position: 'absolute',
  bottom: '100%',
  border: 'solid transparent',
  borderWidth: '0 10px 10px 10px',
  borderBottomColor: themeColors.white,
};

const after = {
  content: '""',
  display: 'block',
  position: 'absolute',
  zIndex: -1,
  bottom: '100%',
  width: 10,
  height: 5,
  backgroundColor: 'transparent',
  boxShadow: shadows.dropdownPointer,
};

const styles = {
  root: {
    position: 'absolute',
    left: -4,
    zIndex: 10,
    width: '512px',
    listStyle: 'none',
    boxShadow: shadows.level2,
    ':before': {
      ...before,
      left: 10,
    },
    ':after': {
      ...after,
      left: 15,
    },
  },
  right: {
    left: null,
    right: -4,
    ':before': {
      ...before,
      right: 10,
    },
    ':after': {
      ...after,
      right: 15,
    },
  },
  width: {
    width: '100px'
  }
};

class DropdownMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.dropdownRegistry = new DropdownRegistry();
    this.handleDocumentKeydown = this.handleDocumentKeydown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  getChildContext() {
    return {
      dropdownRegistry: this.dropdownRegistry,
    };
  }

  componentDidMount() {
    global.document.addEventListener('keydown', this.handleDocumentKeydown);
    global.document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    global.document.removeEventListener('keydown', this.handleDocumentKeydown);
    global.document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentKeydown(event) {
    const keyCode = event.keyCode;
      // keydown
    if (keyCode === 40) {
      event.preventDefault();
      this.dropdownRegistry.focusNext();
      // keyup
    } else if (keyCode === 38) {
      event.preventDefault();
      this.dropdownRegistry.focusPrev();
      // esc
    } else if (keyCode === 27) {
      this.props.onClose();
    }
  }

  handleDocumentClick() {
    this.props.onClose();
  }

  render() {
    return (
      <Box
        role="menu"
        p0
        mt2
        mx0
        mb0
        rounded
        backgroundColor={themeColors.white}
        css={this.props.align === 'left' ? styles.root : typeof(this.props.align) == "object" ? { ...styles.root,...styles.right, ...this.props.align } : { ...styles.root, ...styles.right }}
      >
        {this.props.children}
      </Box>
    );
  }
}

DropdownMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  align: PropTypes.oneOf([ 'left', 'right' ]),
  children: PropTypes.node,
};

DropdownMenu.defaultProps = {
  align: 'left',
};

DropdownMenu.childContextTypes = {
  dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired,
};

export default DropdownMenu;
