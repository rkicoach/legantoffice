import React from 'react';
import PropTypes from 'prop-types';
import { LinkBlock, Flex, Box, Heading, Text, config } from '../base';
const { shadows, transitions } = config;

const styles = {
  container: {
    cursor: 'pointer',
    position: 'relative',
    flex: '1 1 45em',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
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
    height: '100%',
    minHeight: '19em',
  },
  text: {
    textShadow: shadows.text,
    marginTop: 'auto',
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },
};

const Promo = ({ imageUrl, link, heading, text, buttonText }) => (
  
  <Box
    center
    bgWhite
    border
    borderGray2
    my1
    mx={[ 0, 1 ]}
    is="article"
    css={{ ...styles.container, backgroundImage: `url('${imageUrl}')` }}
  >
    <LinkBlock
      route={link.route}
      params={link.params}
    >
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="space-around"
        alignItems="center"
        width={1}
        p2
        css={styles.content}
      >
        <Heading
          white
          is="h3"
          fontSize={[ 3, 2, 2, 2 ]}
          css={styles.text}
        >
          {heading}
        </Heading>
        <Text
          white
          fontSize={4}
          css={styles.text}
        >
          {text}
        </Text>
        <Text
          bold
          white
          is="span"
          fontSize={[ 6, 5, 5, 5 ]}
          css={styles.button}
        >
          {buttonText}
        </Text>
      </Flex>
    </LinkBlock>
  </Box>
);

Promo.propTypes = {
  imageUrl: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.shape({
    route: PropTypes.string,
    params: PropTypes.shape({
      category: PropTypes.string,
      subcategory: PropTypes.string,
    }),
  }),
};

Promo.displayName = 'HomePromo';

export default Promo;
