import React from 'react';
import PropTypes from 'prop-types';
import connectStats from 'react-instantsearch/src/connectors/connectStats';
import { Text } from '../../base';
import { themeColors } from '../../../styles';

const statsString = (number, time) => (
  `${number.toLocaleString()} results found in ${time.toLocaleString()}ms`
);

const Statistics = ({ nbHits, processingTimeMS }) => (
  <Text
    is="span"
    color={themeColors.subtle}
    mr1
  >
    {statsString(nbHits, processingTimeMS)}
  </Text>
);

Statistics.propTypes = {
  nbHits: PropTypes.number,
  processingTimeMS: PropTypes.number,
};

const SearchStats = connectStats(Statistics);

export default SearchStats;
