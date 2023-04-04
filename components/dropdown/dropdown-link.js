import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { Box, NavItem } from '../base';
import DropdownRegistry from './dropdown-registry';

class DropdownLink extends Component {
  constructor(props, context) {
    if (!props.route && !props.onClick) {
      throw new Error('DropdownLink requires either a `route` or `onClick` prop');
    }

    super(props, context);
    this.dropdownRegistry = context.dropdownRegistry;
  }

  componentWillMount() {
    this.dropdownRegistry.addChild(this);
  }

  componentWillUnmount() {
    this.dropdownRegistry.removeChild(this);
  }

  focus() {
    // eslint-disable-next-line react/no-find-dom-node
    findDOMNode(this.refs.link).focus(); // eslint-disable-line react/no-string-refs
  }

  handleLinkFocus() {
    this.dropdownRegistry.setFocusedChild(this);
  }

  handleLinkBlur() {
    this.dropdownRegistry.removeFocusedChild();
  }

  render() {
    return (
      <Box
        is="li"
        role="menuitem"
      >
        <NavItem
          is="a"
          route={this.props.route}
          params={this.props.params}
          onClick={this.props.onClick}
          onFocus={this.handleLinkFocus}
          onBlur={this.handleLinkBlur}
        >
          {this.props.children}
        </NavItem>
      </Box>
    );
  }
}

DropdownLink.propTypes = {
  route: PropTypes.string,
  params: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

DropdownLink.contextTypes = {
  dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired,
};

export default DropdownLink;
