import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connectRange from 'react-instantsearch/src/connectors/connectRange';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import { Flex, Text, Badge } from '../../base';
import { themeColors } from '../../../styles';
import Refinement from './refinement';

const style = {
  label: {
    marginRight: 'auto',
  },
  disabled: {
    opacity: 0.5,
    cursor: 'pointer',
  },
  enabled: {
    opacity: 1,
    cursor: 'pointer',
  },
};

class StarRatingComponent extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.buildItem = this.buildItem.bind(this);
  }

  onClick(min, max, e) {
    e.preventDefault();
    e.stopPropagation();

    const isMin = min === this.props.currentRefinement.min;
    const isMax = max === this.props.currentRefinement.max;

    if (isMin && isMax) {
      this.props.refine({ min: this.props.min, max: this.props.max });
    } else {
      this.props.refine({ min, max });
    }
  }

  buildItem({ max, lowerBound, count, createURL, isLowest }) {
    const isLowerBound = lowerBound === this.props.currentRefinement.min;
    const isUpperBound = max === this.props.currentRefinement.max;
    const selected = isLowerBound && isUpperBound;
    const disabled = !count;

    const icons = [];

    for (let icon = 0; icon < max; icon++) {
      const iconComponent = icon >= lowerBound
        ? <FaStarO key={icon} color={themeColors.secondary} />
        : <FaStar key={icon} color={themeColors.secondary} />;

      icons.push(iconComponent);
    }

    const isLastAndSelect = isLowest && selected;

    const onClickHandler = isLastAndSelect ? {} : {
      href: createURL({ min: lowerBound, max }),
      onClick: this.onClick.bind(this, lowerBound, max),
    };

    return (
      <Flex
        key={lowerBound}
        justifyContent="flex-start"
        alignItems="center"
        css={disabled || selected ? style.disabled : style.enabled}
        {...onClickHandler}
      >
        {icons}
        <Text
          is="span"
          fontSize={5}
          ml1
          css={style.label}
        >
          & Up
        </Text>
        <Badge>
          {count}
        </Badge>
      </Flex>
    );
  }

  render() {
    const { refine, min, max, count, createURL } = this.props;
    const items = [];

    for (let i = max; i >= min; i--) {
      const itemCount = count.reduce((acc, itm) => itm.value >= i ? acc + itm.count : acc, 0);

      items.push(this.buildItem({
        lowerBound: i,
        max,
        refine,
        count: itemCount,
        createURL,
        isLowest: i === min,
      }));
    }

    return (
      <Refinement title={this.props.attributeName}>
        {items}
      </Refinement>
    );
  }
}

StarRatingComponent.propTypes = {
  refine: PropTypes.func,
  createURL: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  currentRefinement: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  count: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  attributeName: PropTypes.string,
};

const StarRating = connectRange(StarRatingComponent);

export default StarRating;
