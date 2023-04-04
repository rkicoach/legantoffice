import React from 'react';
import PropTypes from 'prop-types';
import { Chevron } from 'reline';
import { Flex, Box, Button } from '../base';
import { DropdownMenu } from '../dropdown';
// import { contentPages } from 'utils/helpers';
import { themeColors } from '../../styles';
import CategoryDropdown from './category-dropdown';

const setDropdownAlignment = (i) => {
  const alignment = i >= 3 ? 'right' : 'left';
  return alignment;
};

const styles = {
  root: {
    maxWidth: '68em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  parentButton: {
    position: 'relative',
    margin: 'auto',
  },
};

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

const Menu = ({ categories, menuOpen, openMenu }) => (
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
        css={styles.parentButton}
      >
        <Button
          color={themeColors.primary}
          backgroundColor={themeColors.white}
          fontSize={5}
          py0
          onClick={() => openMenu(cat.slug)}
        >
          <Flex
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="space-around"
            alignItems="center"
          >
            {cat.name}&nbsp;
            <Box
              is={DropdownChevron}
              isOpen={menuOpen === cat.slug}
            />
          </Flex>
        </Button>
        {menuOpen === cat.slug && (
          <DropdownMenu
            align={setDropdownAlignment(i)}
            onClose={() => openMenu(null)}
          >
            <CategoryDropdown
              parentCat={cat.slug}
              childCats={cat.children}
              // pages={contentPages(cat.name, props.catMenuPages)}
            />
          </DropdownMenu>
        )}
      </Box>
    ))}
  </Flex>
);

const catPropTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
};

// const pagePropTypes = PropTypes.arrayOf(
//   PropTypes.shape({
//     name: PropTypes.string,
//     url: PropTypes.string,
//   })
// );

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(
        PropTypes.shape(catPropTypes),
      ),
      ...catPropTypes,
    })
  ),
  // catMenuPages: PropTypes.shape({
  //   'Conference Room Accessories': pagePropTypes,
  //   'Desk Accessories': pagePropTypes,
  // }),
  menuOpen: PropTypes.string,
  openMenu: PropTypes.func,
};

export default Menu;
