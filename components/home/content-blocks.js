import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../base';
import Post from './post';
import Promo from './promo';
import Card from './card';

const HomeContentBlocks = ({ cards, promos, posts }) => (
  <Flex
    px={0}
    mb={2}
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="stretch"
  >

    <Promo {...promos[2]} />
    <Card {...cards[0]} />

    <Post {...posts[0]} />
    <Promo {...promos[0]} />

    <Post {...posts[1]} />
    <Card {...cards[1]} /> 
    <Post {...posts[2]} css={{borderTop: '5px solid #F07830'}} />


    <Promo {...promos[3]} />
    <Card {...cards[2]} />

    <Post {...posts[3]} />
    <Promo {...promos[1]} />

   </Flex>
);

HomeContentBlocks.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  promos: PropTypes.arrayOf(PropTypes.object),
  posts: PropTypes.arrayOf(PropTypes.object),
};

HomeContentBlocks.displayName = 'HomeContentBlocks';

export default HomeContentBlocks;
