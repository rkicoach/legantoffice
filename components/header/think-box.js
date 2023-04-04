import React from 'react';
import {Box, Heading, Flex, NavItem, Text} from '../base'
import CategoryDropdown from './category-dropdown';
import GoLightBulb from 'react-icons/lib/go/light-bulb'

const style = {
    box: {
        border: '1px solid #ccc',
        position: 'relative'
    },
    heading: {
        top: '-18px',
        display: 'inline-block',
        backgroundColor: '#fff',
        position: 'absolute',
        color: '#1f76c3',
		fontWeight:'normal',
		fontSize:'15px'
    },
    linkB: {
      width: '50%',
      position: 'relative',
      zIndex: 1,
      borderBottom: '1px solid #fafafa',
      color: '#1f76c3',
      cursor: 'pointer'
    }
}
const ThinkBox = ({ data }) => (
    <Box border mx2 my2 p2
        css={style.box}
    >
        <Heading is="h5" css={style.heading}> <Text is="span" fontSize={3}><GoLightBulb /></Text> Ideas & Insights</Heading>
        <CategoryDropdown
            parentCat={data.slug}
            childCats={data.children}
            css={style.linkB}
        />
    </Box>
);

export default ThinkBox;