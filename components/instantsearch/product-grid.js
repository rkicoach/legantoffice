import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Configure } from 'react-instantsearch/dom';
import connectInfiniteHits from 'react-instantsearch/src/connectors/connectInfiniteHits';
import { Flex, Button } from '../base';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {defaultPage: 20};
  }

  addPage() {
    this.setState({ defaultPage: (this.state.defaultPage + 20) })
  }

  componentWillReceiveProps(nextProps){
    if(this.props.hits.length && this.state.defaultPage !== 20){
      if( JSON.stringify(this.props.hits[0]) !== JSON.stringify(nextProps.hits[0])){
        this.setState({ defaultPage: 20 })
      }
    }
    
  }

  render() {
    const props = this.props;
    const ItemComponent = props.hitComponent;
    console.log('props.hits',props.hits)
    const renderedHits = props.hits.map((hit, i) => (

      <ItemComponent key={i} hit={hit} />
    ));
    const loadMoreButton = props.hasMore
      ? <Button my2 onClick={() => this.addPage()}>Load More</Button>
      : null;

    return (
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="stretch"
        width={1}
        p1
      >
        <Configure hitsPerPage={this.state.defaultPage} />
        {renderedHits}
        {!props.disableLoadMore && loadMoreButton}
      </Flex>

    );
  }
};

Products.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  hasMore: PropTypes.bool,
  refine: PropTypes.func,
  hitComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  disableLoadMore: PropTypes.bool
};

const ProductGrid = connectInfiniteHits(Products);

export default ProductGrid;
