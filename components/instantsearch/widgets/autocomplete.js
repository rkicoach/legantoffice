import React, { Component } from 'react';
import $ from "jquery";
import PropTypes from 'prop-types';
import { Configure,Hits } from 'react-instantsearch/dom';
import { createConnector } from 'react-instantsearch';
import { connectSearchBox, connectRefinementList } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';
import forOwn from 'lodash/forOwn';
import { Box, Text } from '../../base';
import { titleCase } from '../../../lib/helpers';
import { themeColors } from '../../../styles';
import SearchPage from '../../searchpage';
import Router from 'next/router'
const VirtualSearchBox = connectSearchBox(() => null);
const VirtualRefinementList = connectRefinementList(() => null);


/* const Autocomplete = ({ hit }) => {
  function ProductIdData({hit}) {
    console.log("sdfdfsa--->"+hit);
  }
} */
const connectAutoComplete = createConnector({
  displayName: 'AutoComplete',

  getProvidedProps(props, state, search) {
    const hits = search.results
      ? search.results.hits
      : [];

    const facets = props.attributes.reduce((acc, attributeName) => {
      if (search.results) {
        acc[attributeName] = search.results
          .getFacetValues(attributeName)
          .slice(0, 3)
          .map(v => ({
            name: v.name,
          }));
      }

      return acc;
    }, {});

    return {
      hits,
      query: state.query === undefined ? '' : state.query,
      facets,
    };
  },

  refine(props, searchState, nextQuery) {
    return { ...searchState, query: nextQuery };
  },
});

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.query,
      hideSuggestion: true,
      searchKwd:'',
      searchStatus:false,
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
		
	}
	
      handleKeyPress(e) {
          if (e.key === 'Enter') {
              this.setState({
                hideSuggestion: true,
                searchStatus: true
              });
              Router.push('/category?search='+this.state.value)
              // this.context.router.push('/home');
          }
      } 
  formatHitsForAutoSuggest(props) {
    const hits = [];
    const {searchKwd, hideSuggestion} = this.state
    forOwn({ ...props.facets, hits: props.hits }, (value, key) => {
		if(key != 'brand'){
			if(key == 'hits'){
				hits.push({ title: 'Products', hits: value });
			}
		}
  });
    hits.push({ title: '', hits: [{"viewAll":"View All"}] });
    if(searchKwd) {
      return [];
    } 
    if (hideSuggestion) {
      return [];
    }
    return hits;

  }

  formatSectionTitle(title) {
    const sectionTitle = title.replace('categories.subcategory', 'category');
    return titleCase(sectionTitle);
  }
  searchData (hit) {
    return(
      
      /*  <Box>            
       {hit.id ?<a href={hit.url+"?productId=" + hit.id+"&itemtype="+hit.itemType}><Text  fontSize="0.8em">{hit.name}</Text></a> 
       :<a href={'/category?search='+this.state.value} onClick = {this.viewAll}><Text  fontSize="0.8em">{hit.viewAll}</Text></a>}
      </Box>*/
      <Box>            
       {hit.id ?<a href={hit.url}><Text  fontSize="0.8em">{hit.name}</Text></a> 
       :<a href={'/category?search='+this.state.value} onClick = {this.viewAll}><Text  fontSize="1em" bold>{hit.viewAll}</Text></a>}
      </Box>
      )
  }
	
  // Redirect result page click on view all in search box
  viewAll() {
    this.setState({
      hideSuggestion: true
    });
    window.location = '/category?search='+this.state.value
    //Router.push('/category?search='+this.state.value)
  }

  onChange = (event, { newValue, method }) => {
    //Router.push('/shop/conference-room-accessories/conference-room-sets/')
    this.setState({
      searchKwd: null,
      hideSuggestion: false,
      value: newValue,
      searchStatus:true
    });
    if (!newValue) {
     // location.reload(true);
     // this.setState({value: 'a'});
      var uri = window.location.toString();
      if (uri.indexOf("?") > 0) {
          var clean_uri = uri.substring(0, uri.indexOf("?"));
          window.history.replaceState({}, document.title, clean_uri);
      }
    }
  };

  onBlur = (event, { focusedSuggestion }) => {
    console.log(focusedSuggestion)
    if (focusedSuggestion) {
      this.setState({
        value: focusedSuggestion.name,
      });
    }
  };
componentDidMount() {
    var name = 'search';
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    results = (results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' ')));
    this.setState({searchKwd:results});
}

componentDidUpdate() {
/*  var self = this
  $('.c-1f76c3').click(function(){
    self.setState({searchKwd:null, value:''});
    $('.react-autosuggest__input').blur();
  });*/
  
  if(this.state.searchKwd){
    $('.react-autosuggest__input').focus();
  }
  //window.blur();
}

componentWillUpdate(e) {
    var newPathname = '';
    var pathArray = window.location.pathname;
    for (var i = 1; i < 5; i++) {      
        newPathname += pathArray[i];
    }
    if (newPathname == 'shop' && this.state.searchKwd !='' && this.state.searchStatus == false) {      
      this.setState({searchKwd:'', value:''});
      location.reload(true);
    }
}

//for value undefined when search box empty
onSuggestionsClearRequested() {

}

  render() {
    const {value, searchKwd} = this.state
    return (
      <wrapper><SearchPage propvalue={this.props} />
      <Autosuggest
        multiSection
        suggestions={this.formatHitsForAutoSuggest(this.props)}
        onSuggestionsFetchRequested={ ({ value }) => this.props.refine(value)}
        //onSuggestionsFetchRequested={ ({ value }) => this.props.refine(value)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
        getSuggestionValue={hit => hit.name}
        renderSuggestion={hit => (
          this.searchData(hit)
        )}
        inputProps={{
          placeholder: 'Search Products',
          value:searchKwd?searchKwd:value,
          onChange: this.onChange,
          onBlur: this.onBlur,
          onKeyPress:this.handleKeyPress,
        }}
        renderSectionTitle={section => (
          <Box>
            <Text bold color={themeColors.subtle}>
              {this.formatSectionTitle(section.title)}
            </Text>
          </Box>
        )}
        getSectionSuggestions={section => (section.hits)}
      />
      </wrapper>
    );
  }
}

AutoComplete.propTypes = {
  refine: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
const style = {
  open: {
    position: 'absolute',
    top: '105%',
    width: 'auto',
    zIndex: 5,
    left: 10,
    right: 10
  },
  close:{
    display: 'none'
  }
}
const ConnectedAutoComplete = connectAutoComplete(AutoComplete);
export default (props) => (
  <Box width={props.width} css={props.isLarge ? null: (props.open ? style.open: style.close)}>
    <Configure hitsPerPage={99} />
    <VirtualSearchBox />
    <VirtualRefinementList attributeName="categories.subcategory" />
    <VirtualRefinementList attributeName="brand" />
	{(props.defaultRefine && props.defaultRefine.length > 0) ?
		      props.defaultRefine.map((refine) => {
			              return (
					                <VirtualRefinementList attributeName={refine.refineName} defaultRefinement={
								            refine.defaultVal
								          } />
					              )
				            })
		
		    : null }
	<ConnectedAutoComplete attributes={['categories.subcategory', 'brand']} />
  </Box>
);
