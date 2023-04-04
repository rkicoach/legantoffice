import React from 'react';
import PropTypes from 'prop-types';
import sortOptions from '../../lib/options/catalog-sort-options';
import { Box, Heading, Overlay } from '../base';
import DesktopTopper from './desktop-topper';
import DesktopSidebar from './desktop-sidebar';
import MobileTopper from './mobile-topper';
import MobileSidebar from './mobile-sidebar';
import ProductGrid from './product-grid';
import ProductCard from './product-card';
import Product from '../../pages/product';
import ProductTabs from './widgets/productsTabs';

const styles = {
  content: {
    float: 'left',
  },
  clear: {
    ':after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
  },
};
const Results = props => {
  return (
    <Box css={styles.clear}>
      {props.isLarge ? (
        <Box>
          <DesktopTopper sortOptions={sortOptions} />
          <DesktopSidebar />
        </Box>
      ) : (
          <Box>
            <MobileTopper
              sortOptions={sortOptions}
              openMenu={props.openMenu}
            />
            <MobileSidebar
              isOpen={props.menuOpen === 'category-sidebar'}
              openMenu={props.openMenu}
            />
            <Overlay
              isOpen={props.menuOpen === 'category-sidebar'}
              onDismiss={() => props.openMenu(null)}
            />
          </Box>
        )}
      <Box
        center
        width={[1, 1, 0.8, 0.8]}
        css={styles.content}
      >
        <Heading
          className="pageTitle"
          is="h1"
          bold
          mb2
        >

          {props.tabs ? 'Conference Table Pads':props.pageName}
        </Heading>
	  {props.imageUrl ? (<Box is="img"
		             src={props.imageUrl} />):(<div></div>)}
	  {props.promoTopper ?(<div style={{"padding":"0px 20px"}} dangerouslySetInnerHTML={{__html:props.promoTopper}}></div>) : (<div></div>)}
        {props.isLarge && (
          props.tabs &&
          <ProductTabs attributeName="pad_type" activeTab={props.activeTab} />)
        }
        <ProductGrid
          hitComponent={hit => (<ProductCard {...hit} showModal={props.showModal} />)}
        />
        {props.description ?(<div style={{"padding":"0px 20px","text-align":"left"}} dangerouslySetInnerHTML={{__html:props.description}}></div>) : (<div></div>)}
      </Box>
    </Box>
  )
};

Results.propTypes = {
  pageName: PropTypes.string,
  isLarge: PropTypes.bool,
  showModal: PropTypes.func,
  openMenu: PropTypes.func,
  menuOpen: PropTypes.string,
};

export default Results;
