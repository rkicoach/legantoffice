import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from '../base';
import CurrentFilters from './widgets/current-filters';
import FilterGroup from './widgets/filter-group';
import StarRating from './widgets/star-rating';
import filterGroups from './filter-groups';

const MobileSidebar = ({ isOpen, openMenu }) => (
  <Sidebar
    isOpen={isOpen}
    openMenu={openMenu}
    left
  >
    <CurrentFilters />
    {filterGroups.map((group, i) => (
      <FilterGroup
        key={i}
        attributeName={group.attributeName}
        operator={group.operator || null}
        showMore
        limitMin={5}
        limitMax={25}
      />
    ))}
    <StarRating attributeName="rating" />
  </Sidebar>
);

MobileSidebar.propTypes = {
  isOpen: PropTypes.bool,
  openMenu: PropTypes.func,
};

export default MobileSidebar;
