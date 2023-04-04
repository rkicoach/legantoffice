import React from 'react';
import { Box } from '../base';
import FilterGroup from './widgets/filter-group';
import StarRating from './widgets/star-rating';
import filterGroups from './filter-groups';
import { ClearAll} from 'react-instantsearch/dom';

const styles = {
  bar: {
    display: 'block',
    float: 'left',
  },
};

const DesktopSidebar = () => (
  <Box
    width={[ 0, 0, 0.2, 0.2 ]}
    css={styles.bar}
    pr={[ 0, 0, 1, 2 ]}
  >
  <Box mb2>
    <ClearAll
      transformItems={items => items.filter(item => item.attributeName !== "categories.category")}
    />
  </Box>
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
  </Box>
);

export default DesktopSidebar;
