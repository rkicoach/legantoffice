import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from 'react-sanfona';
import { Sidebar } from '../base';
// import { themeColors } from '../../styles';
import CategoryDropdown from './category-dropdown';

const MobileMenu = ({ categories, menuOpen, openMenu }) => (
  <Sidebar
    isOpen={menuOpen === 'mobile-menu'}
    openMenu={openMenu}
  >
    <Accordion>
      {categories.map(cat => (
        <AccordionItem
          key={cat.slug}
          title={cat.name}
          slug={cat.slug}
        >
          <CategoryDropdown
            parentCat={cat.slug}
            childCats={cat.children}
            // pages={contentPages(cat.name, props.catMenuPages)}
          />
        </AccordionItem>
      ))}
    </Accordion>
  </Sidebar>
);

const catPropTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
};

MobileMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.shape(catPropTypes)),
    ...catPropTypes,
  })),
  menuOpen: PropTypes.string,
  openMenu: PropTypes.func,
};

export default MobileMenu;
