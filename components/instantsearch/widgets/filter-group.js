import PropTypes from 'prop-types';
import React, { Component } from 'react';
import connectRefinementList from 'react-instantsearch/src/connectors/connectRefinementList';
import { Flex, Label, Checkbox, Badge, Button } from '../../base';
import { catUrl } from '../../../lib/helpers';
import Refinement from './refinement';
const queryString = require('query-string');

const style = {
	  label: {
		      marginRight: 'auto',
		      fontWeight: '400'
		    },
};

class FilterItem extends React.Component {

	  constructor(props) {
		      super(props);
		      this.refineCHANGE = this.refineCHANGE.bind(this);
		      this.refineClick = this.refineClick.bind(this);

		    }

	  refineCHANGE() {

		      const parsed = queryString.parse(location.search);
		      if(!window.history.state['facetFilters'] && ((parsed['q'] == this.props.attribute) || (parsed['q'] && parsed['q'].indexOf(this.props.attribute) >=0))) {

			            if(parsed['q'] == this.props.attribute) {
					            var newRefine = parsed['s'].split(',');
					            newRefine.push(this.props.value.join());
					            parsed['s'] = newRefine.join();
					            this.props.refine(newRefine);
					          } else if(parsed['q'] && parsed['q'].indexOf(this.props.attribute) >=0) {
							          var valIndx = parsed['q'].indexOf(this.props.attribute);
							          var newRefine = parsed['s'][valIndx].split(',');
							          newRefine.push(this.props.value.join());
							          parsed['s'][valIndx] = newRefine.join();
							          this.props.refine(newRefine);
							        }

			          }else {
					        this.props.refine(this.props.value);
					      }

		      var facetFilter = {};
		      facetFilter[this.props.attribute] = this.props.value;




		      window.history.pushState({facetFilters:facetFilter},"","");//
		      var refineFn = this.props.refine;

		      var currentAttribute = this.props.attribute
		      window.onpopstate = function(event) {
			              if(event.state['facetFilters'] && event.state['facetFilters'][currentAttribute]) {
					                    refineFn(event.state['facetFilters'][currentAttribute])
					              }else{
							                var uri = window.location.toString();
							                var clean_uri = uri.substring(0, (uri.indexOf("?") || uri.length));
							                window.location = uri
							              }
			          };
		    }

	  refineClick() {

		    }

	  render() {
		      var props = this.props;
		      return (
			            <Flex
			              justifyContent="flex-start"
			              alignItems="center"
			              onClick={this.refineCHANGE}
			            >
			              <Checkbox
			                name={catUrl(props.label)}
			                checked={props.isRefined}
			                onChange={this.refineClick}
			                mr1
			              />
			              <Label css={style.label}>
			                {props.label}
			              </Label>
			              <Badge>
			                {props.count}
			              </Badge>
			            </Flex>
			          );
		    }

}

FilterItem.propTypes = {
	  isRefined: PropTypes.bool,
	  label: PropTypes.string,
	  refine: PropTypes.func,
	  value: PropTypes.arrayOf(PropTypes.string),
	  count: PropTypes.number,
};

class FilterList extends Component {
	  constructor(props) {
		      super(props);
		      this.state = { extended: false };
		      this.renderShowMoreButton = this.renderShowMoreButton.bind(this);
		      this.renderItem = this.renderItem.bind(this);
		      this.getInitialLimit = this.getInitialLimit.bind(this);
		      this.toggleExtended = this.toggleExtended.bind(this);
		    }

	  getInitialLimit() {
		      return this.state.extended ? this.props.limitMax : this.props.limitMin;
		    }

	  toggleExtended() {
		      this.setState({ extended: !this.state.extended });
		    }

	  renderItem(item, key, attribute) {
		      return (
			            <FilterItem
			              key={key}
			              label={item.label}
			              attribute={attribute}
			              value={item.value}
			              count={item.count}
			              isRefined={item.isRefined}
			              refine={this.props.refine}
			            />
			          );
		    }

	  renderShowMoreButton() {
		      if (!this.props.showMore || this.props.items.length <= this.props.limitMin) {
			            return null;
			          }

		      return (
			            <Button
			              mt1
			              onClick={this.toggleExtended}
			            >
			              {this.state.extended ? 'Show Less' : 'Show More'}
			            </Button>
			          );
		    }

	  render() {
		      if (this.props.items.length <= 0) {
			            return null;
			          }

		      const initialItems = this.props.items.slice(0, this.getInitialLimit());

		      return (
			            <Refinement title={this.props.attributeName}>
			              {initialItems.map((item, i) => this.renderItem(item, i, this.props.attributeName))}
			              {this.renderShowMoreButton()}
			            </Refinement>
			          );
		    }
}

FilterList.propTypes = {
	  attributeName: PropTypes.string.isRequired,
	  refine: PropTypes.func,
	  items: PropTypes.arrayOf(
		      PropTypes.shape({
			            label: PropTypes.string,
			            value: PropTypes.arrayOf(PropTypes.string),
			            count: PropTypes.number,
			            isRefined: PropTypes.bool,
			          })
		    ),
	  showMore: PropTypes.bool,
	  limitMin: PropTypes.number,
	  limitMax: PropTypes.number,
};

const FilterGroup = connectRefinementList(FilterList);

export default FilterGroup;

