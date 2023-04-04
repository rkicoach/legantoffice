import React from 'react';
import PropTypes from 'prop-types';
import { Flex, NavItem, Text } from '../base';

const styles = {
  link: {
    width: '50%',
    position: 'relative',
    zIndex: 1,
    borderBottom: '1px solid #fafafa',
     ':hover': {
       backgroundColor: '#f2f2f2'
     }
  },
  linkB: {
    flexBasis: '100%',
    position: 'relative',
    zIndex: 1,
    borderBottom: '1px solid #fafafa',
    ':hover': {
       backgroundColor: '#f2f2f2'
     }
  },
};

const CategoryDropdown = props => (
  <Flex
    flexDirection="row"
    flexWrap="wrap"
  >
    {props.childCats.map(cat => {
      let params = cat.name=='Conference Table Pads'?
                    { category: props.parentCat, subcategory: cat.slug, tabs: 'run' }:
                    { category: props.parentCat, subcategory: cat.slug}
    return (
      !cat.click ? <NavItem
	href={`/shop/${props.parentCat}/${cat.slug}`}
        key={cat.slug}
        route="category"
        params={params}
        css={styles.link}
        p1
      >
        {cat.name}
      </NavItem> : <Text is="span" key={cat.slug} p1 css={props.css} style={cat.style} onClick={()=>cat.click(cat.slug)}>{cat.name}</Text>
    )
  }
    
    )}
  </Flex>
);

CategoryDropdown.propTypes = {
  parentCat: PropTypes.string,
  childCats: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  // pages: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string,
  //     ur: PropTypes.string,
  //   }),
  // ),
  // baseUrl: PropTypes.string.isRequired,
  // greaterThanSmall: PropTypes.bool,
};

export default CategoryDropdown;
