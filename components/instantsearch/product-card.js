import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import { themeColors } from '../../styles';
import { priceString } from '../../lib/helpers';
//import { FaClone, FaStar, FaTag } from 'react-icons/lib/fa';
import FaClone from 'react-icons/lib/fa/clone';
import FaStar from 'react-icons/lib/fa/star';
import FaTag from 'react-icons/lib/fa/tag';
// import ProductCardReviews from './product-card-reviews';

const { breakpoints } = config.get();

const styles = {
  card: {
    flexBasis: '96%',
    maxWidth: '96%',
    [breakpoints[0]]: {
      flexBasis: '48%',
      maxWidth: '48%',
    },
    [breakpoints[1]]: {
      flexBasis: '31%',
      maxWidth: '31%',
    },
    [breakpoints[2]]: {
      flexBasis: '23%',
      maxWidth: '23%',
    },
  },
  link: {
    height: '100%',
    cursor: 'pointer',
    ":hover": {
      textDecoration: 'none'
    }
  },
  imageContainer: {
    margin: 'auto',
    minHeight: 128,
  },
  image: {
    margin: 'auto',
  },
  retail: {
    textDecoration: 'line-through',
  },

};


const ProductCard = ({ hit }) => {
  function starReturn(value, id)
    {
        var rating = []
        for(var a = 0; a<value; a++){
            rating.push(<FaStar key={id+a} />)
        }
       return rating;
    }
  var hitUri = (hit.url).substr(10);
  var newHitUri = hitUri.substring(0, hitUri.length-1);
//  var urlPro = newHitUri + '?productId=' + hit.id + '&itemtype=' + hit.itemType;
  var urlPro = newHitUri ;
  var proUrl = "/products/" + urlPro;
  var dataRating = Math.floor(hit.rating)
  return (
    <Box
      p1
      mb2
      center
      rounded
      border
      borderColor={themeColors.light}
      css={styles.card}
    >
      <NavItem
	href={proUrl}
        route='product'
        params={{ slug: urlPro }}
        css={styles.link}
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="space-between"
          css={styles.link}
        >
          <Flex
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="space-between"
            alignItems="center"
            mb1
          >
          <Box>
            <Text
              className="brandHover"
              is="span"
              fontSize={6}
              color={themeColors.subtle}
            >
              {hit.brand}
            </Text>
            </Box>
            <Box>
            {dataRating?<Text
              css={styles.reviewHover}
              fontSize={6}
              color='#f07830'
            >
              {starReturn(dataRating, hit.id)}
            </Text>:<Text
              css={styles.reviewHover}
              fontSize={6}
              color='#ccc'
            >
              {starReturn(5, hit.id)}
            </Text>}
            <Text
              css={styles.reviewHover}
              fontSize={6}
              color={themeColors.subtle}
            >

              {hit.reviews} Reviews
            </Text>
            </Box>
          </Flex>
          <Box
            css={styles.imageContainer}
          >
            {hit.image_ix
              ? (<Image src={hit.image_ix} css={styles.image} alt={hit.name}/>)
              : (<Image src={hit.image} css={styles.image} alt={hit.name}/>)
            }
            {/* <div className="card-qv-button">
              <button
                // rounded
                onClick={(e) => {
                  e.preventDefault();
                  console.log('qv click');
                  // showModal('QUICK_VIEW', {
                  //   productId: `${hit.id}`,
                  //   title: hit.name,
                  // });
                }}
              >
                Quick View
              </button>
            </div> */}
          </Box>
          <Box>
            <Heading
              className="header_color"
              is="h4"
			   fontSize="0.8em"
              my={[1, 2, 3, 3]}
              color={themeColors.action}
            >
              {hit.name}
            </Heading>
            <Flex
              justifyContent="center"
              alignItems="center"
            >
            {(hit.price != hit.retail_price) && 
              <Text
                mr2
                bold
                color={themeColors.subtle}
                css={styles.retail}
              >
                {priceString(hit.retail_price)}
              </Text>
            }
              <Text bold className="price">
                {priceString(hit.price)}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </NavItem>
    </Box>
  );
};

/* eslint camelcase: 0 */
ProductCard.propTypes = {
  hit: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    image_ix: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    retail_price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    brand: PropTypes.string,
    bin_picking_number: PropTypes.number,
    url: PropTypes.string,
    urlid: PropTypes.number,
  }),
};

export default ProductCard;
