import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../base';
import SortSelect from './widgets/sort-select';
import CurrentFilters from './widgets/current-filters';
import SearchStats from './widgets/search-stats';

const styles = {
  controls: {
    flex: '1 0 26em',
  },
};

const DesktopTopper = ({ sortOptions }) => (
  <Flex
    flexDirection="row"
    flexWrap="nowrap"
    justifyContent="space-between"
    alignItems="center"
    my2
  >
    <Box>
      <CurrentFilters />
    </Box>
    <Flex
      flexWrap="nowrap"
      justifyContent="flex-end"
      alignItems="center"
      fontSize={6}
      css={styles.controls}
    >
      <SearchStats />
      <SortSelect
        items={sortOptions}
        defaultRefinement="next-teo-products"
      />
    </Flex>
  </Flex>
);

DesktopTopper.propTypes = {
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default DesktopTopper;
