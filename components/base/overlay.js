import PropTypes from 'prop-types';
import { themeColors } from '../../styles';
import { Box } from './index';

const styles = {
  root: {
    position: 'fixed',
    backgroundColor: themeColors.overlay,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9998,
    display: 'none',
  },
};

const Overlay = ({ children, isOpen, onDismiss, css, ...props }) => (
  <Box
    css={{
      ...styles.root,
      ...css,
      display: isOpen ? null : 'none',
    }}
    onClick={onDismiss}
    {...props}
  >
    {children}
  </Box>
);

Overlay.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  css: PropTypes.object,
};

Overlay.defaultProps = {
  isOpen: false,
};

Overlay.displayName = 'Overlay';

export default Overlay;
