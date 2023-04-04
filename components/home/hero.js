import React from 'react';
import PropTypes from 'prop-types';
import { LinkBlock, Flex, Heading, Text, config, NavItem } from '../base';

const { shadows } = config;

const styles = {
	  container: {
		      cursor: 'pointer',
		      height: '320px',
		      backgroundPosition: 'center center',
		      backgroundSize: 'cover',
		    },
	  heading: {
		      textShadow: shadows.text,
		      marginTop: 'auto',
		    },
	  text: {
		      textShadow: shadows.text,
		    },
	  button: {
		      alignSelf: 'flex-end',
		      marginTop: 'auto',
		    },
	  linkStyle:{
		      ':hover': {
			            textDecoration: 'none'
			          },
		      width: '100%', textDecoration: 'none'
		    }
};

const HomeHero = ({ link, heading, linkUrl, text, buttonText, imageUrl }) => {
	  var category = link.params.category;
	  var subcategory = link.params.subcategory;
	  var param = {
		      "category": category,
		      "subcategory": subcategory
		    }

	  return (
		    <LinkBlock
		      href={`/shop/${link.params.category}/${link.params.subcategory || ""}`}
		      route={link.route}
		      params={param}
		      css={styles.linkStyle}
		    >
		      <Flex
		        p={2}
		        m={1}
		        flexDirection="column"
		        justifyContent="center"
		        alignItems="center"
		        css={{ ...styles.container, backgroundImage: `url('${imageUrl}')` }}
		      >
		        <Heading
		          center
		          white
		          mb4
		          is="h1"
		          fontSize={[ 2, 2, 1, 1 ]}
		          css={styles.heading}
		        >
		          {heading}
		        </Heading>
		        <Text
		          center
		          mb3
		          white
		          fontSize={[ 4, 3, 3, 3 ]}
		          css={styles.text}
		        >
		          {text}
		        </Text>
		        <Text
		          bold
		          white
		          is="span"
		          fontSize={[ 5, 4, 4, 4 ]}
		          css={styles.button}
		        >
		          {buttonText}
		        </Text>
		      </Flex>
		    </LinkBlock>
	  )};

HomeHero.propTypes = {
	  imageUrl: PropTypes.string,
	  linkUrl: PropTypes.string,
	  heading: PropTypes.string,
	  text: PropTypes.string,
	  buttonText: PropTypes.string,
};

HomeHero.displayName = 'HomeHero';

export default HomeHero;

