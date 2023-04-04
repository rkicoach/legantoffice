import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'axs';
import { Link } from '../../routes';
import { themeColors, transitions } from '../../styles';


const styles = {
	  textDecoration: 'none',
	  opacity: 1,
	  cursor: 'pointer',
	  transition: `opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000)`,
	  ':hover': {
		      opacity: 0.7,
		    },
	  ':active': {
		      opacity: 0.7,
		      outline: 'none',
		    },
	  ':focus': {
		      opacity: 0.7,
		      outline: 'none',
		    },
};

const NavItem = ({ primary, route, params, prefetch, children, ...props }) => (
			<Link route={route} params={params} prefetch={prefetch}>
	    <Text
	      is="a"
	      color={primary ? ('#114e81') : ('#1f76c3')}
	      fontSize={5}
	      {...props}
	      css={{ ...styles, ...props.css }}
	    >
	      {children}
	    </Text>
	  </Link>
);

NavItem.propTypes = {
	  route: PropTypes.string,
	  params: PropTypes.object,
	  prefetch: PropTypes.bool,
	  children: PropTypes.node,
	  css: PropTypes.object,
	  primary: PropTypes.bool,
};

NavItem.displayName = 'NavItem';

export default NavItem;

