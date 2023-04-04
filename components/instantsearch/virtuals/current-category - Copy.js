import React from 'react';
import PropTypes from 'prop-types';
import connectHierarchicalMenu from 'react-instantsearch/src/connectors/connectHierarchicalMenu';
import { catString } from '../../../lib/helpers';
const VirtualHierarchicalMenu = connectHierarchicalMenu(() => null);

const CurrentCategory = (props) => {
  var { category, subcategory, isSearch } = props;
  if (isSearch == undefined) {
    isSearch = false;
  }
  console.log('isSearch '+ isSearch)
  return (
    <VirtualHierarchicalMenu
      attributes={isSearch ? ['categories.category'] : ['categories.subcategory']}
      defaultRefinement={catString(category, subcategory)} // for Breadcrumbs 
    />
  );
};

CurrentCategory.propTypes = {
  category: PropTypes.string,
  subcategory: PropTypes.string,
};

export default CurrentCategory;
