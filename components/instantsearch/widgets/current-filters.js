import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import connectCurrentRefinements from 'react-instantsearch/src/connectors/connectCurrentRefinements';
import FaClose from 'react-icons/lib/fa/close';
import { Box, Text } from '../../base';
import { themeColors } from '../../../styles';
import { titleCase } from '../../../lib/helpers';

const filterLabel = (label) => {
	  const rawLabel = label.replace('categories.category', 'category');
	  return titleCase(rawLabel.replace(/_/g, ' '));
};

const styles = {
	  outer: {
		      display: 'inline-flex',
		      justifyContent: 'center',
		      alignItems: 'center',
		    },
	  close: {
		      marginLeft: 4,
		      marginRight: 8,
		      cursor: 'pointer',
		    },
};

class ActiveFilters extends React.Component {

	  constructor(props) {
		      super(props);
		    }

	  componentDidUpdate() {
		      var items = this.props.items;
		      if(items.length > 1) {
			            var urlString = '?';
			            items = _.keyBy(items,'attributeName');
			            items = _.toArray(items);//
			            for(var i = 1;i<items.length;i++) {
					            var str = items[i]['currentRefinement'] || '';
					            if(!str) {
							              continue;
							            }
					            str = str.map((val)=> encodeURIComponent(val));
					            str = str.join("%2C");
					            var query = '';
					            if(i != 1) {
							              query = '&';
							            }
					            query += 'q=' + items[i]['attributeName'] + '&s=' + str;
					            urlString += query;
					          }
			            window.history.replaceState(window.history.state, document.title, urlString);
			          }else{
					        var uri = window.location.toString();
					        if (uri.indexOf("?") > 0) {
							          var clean_uri = uri.substring(0, uri.indexOf("?"));
							          window.history.replaceState({}, document.title, clean_uri);
							      }
					      }
		    }

	  componentDidMount() {

		    }

	  render() {

		      var { items, refine } = this.props;
		      if(items.length !== 0) {
			            items = _.keyBy(items,'attributeName');
			            items = _.toArray(items);//
			          }

		      return (
			          <Box>
			            {items.length !== 0 && items.map((item, i) => (
					            <Box
					              key={i}
					              color={themeColors.subtle}
					              fontSize={6}
					              css={styles.outer}
					            >
					              <Text is="span">
					                {filterLabel(item.label)}
					              </Text>
					              {item.items ? (
							                  item.items.map(nestedItem => (
										                <Box
										                  key={nestedItem.label}
										                  css={styles.outer}
										                >
										                  <Text is="span">
										                    {nestedItem.label}
										                  </Text>
										                  <FaClose
										                    color={themeColors.subtle}
										                    onClick={() => refine(nestedItem.value)}
										                    style={styles.close}
										                  />
										                </Box>
										              ))) : (
												                    <FaClose
												                      color={themeColors.subtle}
												                      onClick={() => refine(item.value)}
												                      style={styles.close}
												                    />
												                )}
					            </Box>
					          ))}
			          </Box>
			        )
		    }
}


ActiveFilters.propTypes = {
	  refine: PropTypes.func,
	  items: PropTypes.arrayOf(
		      PropTypes.shape({
			            label: PropTypes.string,
			            value: PropTypes.func,
			          })
		    ),
};

const CurrentFilters = connectCurrentRefinements(ActiveFilters);

export default CurrentFilters;

