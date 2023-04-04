import React from 'react';
import PropTypes from 'prop-types';
import { Flex, NavItem, Box, Heading } from '../base';
import FaClone from 'react-icons/lib/fa/clone';
import FaStar from 'react-icons/lib/fa/star';
import FaTag from 'react-icons/lib/fa/tag';
//import {FaClone, FaStar, FaTag } from 'react-icons/lib/fa';
import HomeHero from './hero';
//import HomeBanner from './home-banner';
import HomeContentBlocks from './content-blocks';
import { InstantSearch,Hits } from 'react-instantsearch/dom';
import ProductFeature from '../instantsearch/product-feature';
const HomeContent = (props) => (
  <Flex
    px={1}
    mb={2}
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="stretch"
  >
    <HomeHero {...props.hero} />
    <HomeContentBlocks
      cards={props.cards}
      promos={props.promos}
      posts={props.posts}
    />
    <Heading is="h2" fontSize="2" mt1 mb2>Featured Products</Heading>
    <ProductFeature / >
  </Flex>
);

HomeContent.propTypes = {
  hero: PropTypes.object,
  cards: PropTypes.array,
  promos: PropTypes.array,
  posts: PropTypes.array,
};

HomeContent.displayName = 'HomeContent';

export default HomeContent;
