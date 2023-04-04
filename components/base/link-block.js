import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'axs';
import { Text } from 'axs';
import { Link } from '../../routes';

const style = { width: '100%', textDecoration: 'none' };

const LinkBlock = ({ route, params,product_id,prefetch, children, ...props }) => (

	<Link route={route} params={params} prefetch={prefetch}>
		    <Text
		      is="a"
		      {...props}
		      css={{ ...style, ...props.css }}
		    >
		      {children}
				</Text>
		  </Link>
);

LinkBlock.propTypes = {
		  route: PropTypes.string,
		  params: PropTypes.object,
		  prefetch: PropTypes.bool,
		  children: PropTypes.node,
};

LinkBlock.displayName = 'LinkBlock';

export default LinkBlock;


