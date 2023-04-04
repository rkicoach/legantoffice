import React from 'react';
import PropTypes from 'prop-types';
import FaFilter from 'react-icons/lib/fa/filter';
import { Flex } from '../base';
import { themeColors } from '../../styles';
import SortSelect from './widgets/sort-select';

const MobileTopper = ({ sortOptions, openMenu }) => (
  <Flex
    flexDirection="row"
    flexWrap="nowrap"
    justifyContent="space-between"
    alignItems="center"
    fontSize={6}
    mx2
    mt2
    mb1
  >
    <FaFilter
      size={24}
      color={themeColors.dark}
      style={{ cursor: 'pointer' }}
      onClick={() => openMenu('category-sidebar')}
    />
    <SortSelect
      items={sortOptions}
      defaultRefinement="next-teo-products"
    />
  </Flex>
);

MobileTopper.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  openMenu: PropTypes.func,
};

export default MobileTopper;
