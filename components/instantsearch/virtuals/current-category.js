import React from 'react';
import PropTypes from 'prop-types';
import connectHierarchicalMenu from 'react-instantsearch/src/connectors/connectHierarchicalMenu';
import { catString } from '../../../lib/helpers';

const VirtualHierarchicalMenu = connectHierarchicalMenu(() => null);

const CurrentCategory = (props) => {
  const { category, subcategory } = props;
  return (
    <VirtualHierarchicalMenu
      attributes={['categories.category', 'categories.subcategory']}
      defaultRefinement={catString(category, subcategory)} // for Breadcrumbs 
    />
  );
};

CurrentCategory.propTypes = {
  category: PropTypes.string,
  subcategory: PropTypes.string,
};

export default CurrentCategory;
