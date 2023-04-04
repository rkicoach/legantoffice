import React from 'react';
import PropTypes from 'prop-types';
import { Chevron } from 'reline';
import { Flex, Box, Button } from '../base';
import { DropdownMenu } from '../dropdown';
import { themeColors } from '../../styles';
import CategoryDropdown from './category-dropdown';
import ThinkBox from './think-box';
import shadow from '../../styles/shadows'
import Router from 'next/router'

const styles = {
  root: {
    maxWidth: '68em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  parentContainer: {
    position: 'relative',
    margin: 'auto',
  },
  linkShadow: {
    ':hover': {
      boxShadow: shadow.level2
    }
  },
  linkB: {
    flexBasis: '100%',
    position: 'relative',
    color: '##1f76c3',
    fontSize: '0.8em',
    zIndex: 1,
    borderBottom: '1px solid #fafafa',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.7,
      backgroundColor: '#f2f2f2'
    },
    ':active': {
      opacity: 0.7,
      outline: 'none',
      backgroundColor: '#f2f2f2'
    },
    ':focus': {
      opacity: 0.7,
      outline: 'none',
      backgroundColor: '#f2f2f2'
    },
  }
};
function openUrllinklethertype(componentname, url){
  Router.push(componentname,url)
  //window.open(e,'_self')
 
}

function redirectUrl(url){
  window.location = url;
}

const setDropdownAlignment = i => i >= 3 ? 'right' : 'left';
var menulinkUrl = "http://35.193.182.100/";
const DropdownChevron = ({ isOpen }) => (
  <Chevron
    right={!isOpen}
    down={isOpen}
    size={9}
  />
);

DropdownChevron.propTypes = {
  isOpen: PropTypes.bool,
};

const Menu = ({ categories, menuOpen, openMenu }) => {
  const dataC = {
    "slug": "sass",
    "children": [
      {
        "name": "Types of Table Pads",
        "order": 0,
        "slug": menulinkUrl+"tablepadcomponent",
        "click":openUrllinklethertype.bind(this,'/tablepadcomponent','/pages/types-of-table-pads/')
        
      },
      {
        "name": "Add A Logo",
        "order": 1,
        "slug": menulinkUrl+"addlogocomponent",
        "click":openUrllinklethertype.bind(this,'/addlogocomponent','/pages/add-a-logo/')
      },
      {
        "name": "Conference Table Renderings",
        "order": 2,
        "slug": menulinkUrl+"conferencecomponent",
        "click":openUrllinklethertype.bind(this,'/conferencecomponent','/pages/conference-table-renderings/')
      },
      {
        "name": "Why Conference Table Pads",
        "order": 3,
        "slug": menulinkUrl,
        "click":openUrllinklethertype.bind(this,'/whyconferencecomponent','/pages/why-conference-table-pads/')
      },
      {
        "name": "B2B Solutions",
        "order": 4,
        "slug": menulinkUrl+"b2bcomponent",
		    "click":openUrllinklethertype.bind(this,'/b2bcomponent','/pages/b2b-solutions/')
      },
      /*{
        "name": "Essential Dining Accessories",
        "order": 5,
        "slug": menulinkUrl+"diningcomponent",
        "click":openUrllinklethertype.bind(this,'/diningcomponent','pages/dining/')
      }*/
    ]
	
  }
    
  const dataD = {
    "slug": "usesr",
    "children": [
      {
        "name": "Add your Logo",
        "order": 0,
        "slug": menulinkUrl+"addlogocomponent",
        "click":openUrllinklethertype.bind(this,'/addlogocomponent','/pages/add-a-logo/')
      },
      {
        "name": "Desk Pad Styles",
        "order": 1,
        "slug": menulinkUrl+"deskcomponent",
        "click":openUrllinklethertype.bind(this,'/deskcomponent','/pages/desk-pad-styles/')
      },
      {
        "name": "Personalization",
        "order": 2,
        "slug": menulinkUrl+"personalizationcomponent",
        "click":openUrllinklethertype.bind(this,'/personalizationcomponent','/pages/personalization/')
      },
      {
        "name": "Leather Types",
        "order": 3,
        "slug": menulinkUrl+"lethercomponent",
		    "click":openUrllinklethertype.bind(this,'/lethercomponent','/pages/leather-types/')
      }
    ]
  }
 
return (
  <Flex
    justifyContent="space-around"
    alignItems="center"
    color={themeColors.primary}
    backgroundColor={themeColors.white}
    pt1
    px1
    css={styles.root}
  >
 
    {categories.map((cat, i) => (
      <Box
        key={cat.slug}
        css={styles.parentContainer}
      >
      {(cat.slug == 'shopping' || cat.slug == 'user') ? 
        <Button
          notBold
          color={themeColors.primary}
          backgroundColor={themeColors.white}
          fontSize={5}
          css={styles.linkShadow}
          px1
          onClick={() => redirectUrl(cat.url)}
        >
          <Flex
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="space-around"
            alignItems="center"
          >
            {cat.name}&nbsp;
            {cat.style ? '' : <Box
              is={DropdownChevron}
              isOpen={menuOpen === cat.slug}
            />}
          </Flex>
        </Button>
        : 
        <Button
          notBold
          color={themeColors.primary}
          backgroundColor={themeColors.white}
          fontSize={5}
          css={styles.linkShadow}
          px1
          onClick={() => openMenu(cat.slug)}
	  onDoubleClick={() => {redirectUrl('/shop/' + cat.slug)}}
        >
          <Flex
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="space-around"
            alignItems="center"
          >
            {cat.name}&nbsp;
            {cat.style ? '' : <Box
              is={DropdownChevron}
              isOpen={menuOpen === cat.slug}
            />}
          </Flex>
        </Button>
      }
        {menuOpen === cat.slug && (
          <DropdownMenu
            align={cat.style ? cat.style : setDropdownAlignment(i)}
            onClose={() => openMenu(null)}
          >
            <CategoryDropdown
              parentCat={cat.slug}
              childCats={cat.children}
              css={cat.children.style?cat.children.style:styles.linkB}
              // pages={contentPages(cat.name, props.catMenuPages)}\
              /*add to other html data line no 83 now*/
            />
            {cat.name == "Conference Room Accessories"?<ThinkBox data={dataC} />:cat.name == "Desk Accessories"?<ThinkBox data={dataD} />:''}     
          </DropdownMenu>
        )}
      </Box>
    )) 
    }
   {/*  if(cat.name == "Conference Room Accessories"){
      <Box>dfsdsds</Box>
    } */}
  </Flex>
)};
const catPropTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
};

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.shape(catPropTypes)),
    ...catPropTypes,
  })),
  menuOpen: PropTypes.string,
  openMenu: PropTypes.func,
};

export default Menu;
