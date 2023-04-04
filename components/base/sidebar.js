import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';
import { themeColors, transitions, shadows } from '../../styles';
import { Box } from './index';

const jjja = {
  jay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    zIndex: 9999,
    transform: 'none',
    transition: `transform ${transitions.duration} ${transitions.easing}`,
    overflowX: 'hidden',
    overflowY: 'auto',
    boxShadow: 'none',
  },
  close: {
    cursor: 'pointer',
    position: 'absolute',
    top: 6,
    right: 6,
  },
};

const setTransform = left => left ? 'translateX(300px)' : 'translateX(-300px)';

const Sidebar = ({ isOpen, openMenu, left, children, ...props }) => (
  <Box
    width={300}
    p2
    bgWhite
    css={{
      ...jjja.jay,
      left: left ? -300 : null,
      right: left ? null : -300,
      transform: isOpen ? setTransform(left) : null,
      boxShadow: isOpen ? shadows.level2 : null,
    }}
    {...props}
  >
    <FaClose
      color={themeColors.subtle}
      onClick={() => openMenu(null)}
      style={jjja.close}
    />
    {children}
  </Box>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  openMenu: PropTypes.func,
  left: PropTypes.bool,
  children: PropTypes.node,
};

export default Sidebar;
