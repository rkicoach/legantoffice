import PropTypes from 'prop-types';
import React from 'react';
import connectSortBy from 'react-instantsearch/src/connectors/connectSortBy';
import { Select } from '../../base';

const SortInput = ({ items, currentRefinement, refine }) => (
  <Select
    name="sort_by"
    value={currentRefinement}
    onChange={e => {
	          refine(e.target.value);
	          window.history.pushState({sort:e.target.value},"","");
	          window.onpopstate = function(event) {
			          console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
			          if(event.state['sort']) {
					            refine(event.state['sort'])
						          }else{
								        // window.location =  window.location
								  refine('next-teo-products')
								          }
				  
				        };
	    
	        }}>
    {items.map((item, i) => (
      <option key={i} label={item.label} value={item.value} />
    ))}
  </Select>
);

SortInput.propTypes = {
  currentRefinement: PropTypes.string,
  refine: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

const SortSelect = connectSortBy(SortInput);

export default SortSelect;
