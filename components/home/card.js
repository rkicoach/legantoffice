import React from 'react';
import PropTypes from 'prop-types';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import { LinkBlock, Flex, Box, Heading, Text, config } from '../base';

const { shadows, transitions, colors } = config;

const styles = {
  container: {
    display: 'flex',
    cursor: 'pointer',
    flex: '2 2 15em',
    backgroundSize: '100% auto',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    boxShadow: shadows.level1,
    opacity: 1,
    minHeight: '19em',
    transition: `box-shadow ${transitions.duration} ${transitions.easing}`,
    ':hover': {
      boxShadow: shadows.level2,
    },
  },
  content: {
    marginTop: 'auto',
    color: '#343434',
    ':hover': {
      color: '#343434',
    }
  },
};

const Card = ({ imageUrl, heading, text, link }) => (
  <LinkBlock
    rounded
    bgWhite
    border
    borderGray2
    flexDirection="column"
    justifyContent="flex-end"
    m1
    is="a"
    href={`/shop/${link.params.category}/${link.params.subcategory}`}
    route={link.route}
      params={link.params}
    css={{ ...styles.container, backgroundImage: `url('${imageUrl}')` }}
  >
    <Box     
      css={styles.content}
    >
      <Box
        bgWhite
        p1
      >
        <Heading
          borderBottom
          borderColor={colors.theme.light}
          is="h3"
          fontSize='20px'
          mb1
          px1
          pb1
        >
          {heading}
        </Heading>
        <Text p1 fontSize='13px'>
          {text} <FaCaretRight />
        </Text>
      </Box>
    </Box>
  </LinkBlock>
);

Card.propTypes = {
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

Card.displayName = 'HomeCard';

export default Card;
