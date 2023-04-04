import PropTypes from 'prop-types';
import React from 'react';
//import $ from 'jquery';
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import FaClone from 'react-icons/lib/fa/clone';
import FaStar from 'react-icons/lib/fa/star';
import FaTag from 'react-icons/lib/fa/tag';
//import { FaClone, FaStar, FaTag } from 'react-icons/lib/fa';
import { themeColors } from '../../styles';
import { InstantSearch, Hits, SearchBox, Highlight } from 'react-instantsearch/dom';
import { Link } from '../../routes';
const { breakpoints } = config.get();

const style = {
  boxWidth: {
    margin: 5,
    padding: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(232, 232, 232)',
    borderRadius: 2,
    position: 'relative'
  },
  block: {
    display: 'block'
  }
};

var dataArr = [];
var count =1;
const ProductFeature = ({ hit }) => {
  function starReturn(value, id)
    {
        var rating = []
        for(var a = 0; a<value; a++){
            rating.push(<FaStar key={id+a} />)
        }
       return rating;
    }

  function Product({ hit }) {
  //console.log('Hit Data '+ JSON.stringify(hit));
	if(hit.is_featured){
		dataArr.push(hit);
	}
  function urlEncode(url){
    var data = url.split('/')
    return data[2];
  } 
    ++count;
    if(count >= 100) { 
		count =1; 
		hit = dataArr.sort(function(a, b){return 0.5 - Math.random()});
	        hit = hit.slice(0,4);
		dataArr=[];
      return (
        <Flex flexWrap="wrap">
        {hit.map((data, i) => (
        i>=8 ? null:
        <Box key={i} width={[1, 1/4]}>
        <Box  css={style.boxWidth} >
          <NavItem route='product'
            params={{ slug: urlEncode(hit[i].url) }}
            className='link-block'
		href={`${hit[i].url}`}
         >
            <div className='card-topper'>
              <div className='card-topper-left'>
                  <p>Dacasso</p>
              </div>
              { Math.floor(hit[i].rating)?
              <Box color='#f07830' className='card-topper-right'>
                {starReturn(Math.floor(hit[i].rating), hit[i].id)}
                <span>{hit[i].reviews} Reviews </span>
              </Box>
              :<Box color='#ccc' className='card-topper-right'>
                {starReturn(5, hit[i].id)}
                <span>{hit[i].reviews} Reviews </span>
              </Box>}
            </div>
            <div className='card-figure'>
              <img className='CardImage' src={hit[i].image} />
            </div>
            <div className='card-body'>
              <div className='card-title'>
                {hit[i].name}
              </div>
              <div className='card-price'>
                <span className='rrp-price'>${hit[i].retail_price} </span>
                <span> ${hit[i].price}</span>
              </div>
            </div>
          </NavItem>
        </Box>
        </Box> ))}</Flex>
      );
  } else {
    return false
  }
};

  return (
    <Flex style={style.block} className="product-grid" justifyContent="space-between">
      <Hits hitComponent={Product} />
    </Flex>
  );

};

/* eslint camelcase: 0 */
ProductFeature.propTypes = {
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

export default ProductFeature;
