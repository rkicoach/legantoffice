
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';
import { Overlay, Box, Flex, Text, config } from '../base';
import { themeColors, shadows } from '../../styles';

const { breakpoints } = config.get();

const styles = {
  root: {
    overflowY: 'scroll',
    overflow: 'auto',
    boxShadow: shadows.level2,
    [breakpoints[0]]: {
      maxWidth: '90%',
    },
    [breakpoints[1]]: {
      maxWidth: '80%',
    },
    [breakpoints[2]]: {
      maxWidth: '70%',
    },
  },
  header: {
    borderRadius: '3px 3px 0px 0px',
    margin: '-12px -12px 12px',
  },
  overlay: {
    zIndex: 999,
  },
  inner: {
    height: '100%',
  },
  close: {
    cursor: 'pointer',
  },
};

const ModalBase = props => (
  <Overlay
    isOpen
    onDismiss={() => props.hideModal()}
    css={styles.overlay}
  >
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={1}
      css={styles.inner}
    >
      <Box
        rounded
        p2
        bg={themeColors.white}
        css={styles.root}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p2
          bg={themeColors.primary}
          css={styles.header}
        >
          <Text
            color={themeColors.white}
            bold
            fontSize={4}
          >
            {props.title}
          </Text>
          <FaClose
            color={themeColors.white}
            onClick={() => props.hideModal()}
            style={styles.close}
          />
        </Flex>
        {props.children}
      </Box>
    </Flex>
  </Overlay>
);

ModalBase.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  hideModal: PropTypes.func,
};

export default ModalBase;
