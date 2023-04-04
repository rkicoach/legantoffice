import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Text, Image, config } from '../base';
import Link from 'next/link'

const { shadows, transitions } = config;

const styles = {
	  container: {
		      color:"black",
		      textDecoration: "none",
		      cursor: 'pointer',
		      flex: '2 2 15em',
		      boxShadow: shadows.level1,
		      opacity: 1,
		      minHeight: '19em',
		      transition: `box-shadow ${transitions.duration} ${transitions.easing}`,
		      borderTop: '5px solid #11416b',
		      ':hover': {
			            boxShadow: shadows.level2,
			            color:"black"
			          },
		    },
};

const Post = (props) => {
	  var { author, imageUrl, heading, text, link, css } = props;
	  var values = {"Accessories in The White House" : "/pages/blog#accessoriesComponent",
		        		      "Color and Design Trends" : "/pages/blog#designComponent",
		                  "Dining Accessories" : "/pages/blog#diningComponent",
		                  "Choose a Conference Table Pad" : "/pages/blog#conferencepadsize"};
	  var postHref = values[heading] || '/blogcomponent';
	  return (
		    <Flex
		      href={postHref}
		      rounded
		      border
		      borderGray2
		      is="a"
		      flexDirection="column"
		      flexWrap="nowrap"
		      justifyContent="space-around"
		      alignItems="center"
		      m1
		      p1
		      css={{...styles.container, ...css}}
		    >
		    <Text color='#1f76c3' fontSize='10px' left width={1}>Info and Advice</Text>
		      <Heading is="h3" fontSize={4} left width={1}>
		        {heading == 'Choose a Conference Table Pad' ? 'Choose a Conference Table Pad - Sizes' : heading}
		      </Heading>
		      <Text fontSize='13px' width={1}>
		        {text}...
		        <a href={postHref}><span style={{color:"#337ab7"}}>More</span></a>
		      </Text>
		     <Image src={`${imageUrl}`} alt={heading} width={200} />
		  	</Flex>
	  )
};

Post.propTypes = {
	  author: PropTypes.string,
	  imageUrl: PropTypes.string,
	  heading: PropTypes.string,
	  text: PropTypes.string,
	  link: PropTypes.shape({
		      route: PropTypes.string,
		      params: PropTypes.shape({
			            category: PropTypes.string,
			            subcategory: PropTypes.string,
			          }),
		    }),
};

Post.displayName = 'HomePost';

export default Post;

