import React from 'react';
import PropTypes from 'prop-types';
import MdLocalShipping from 'react-icons/lib/md/local-shipping';
import MdAspectRatio from 'react-icons/lib/md/aspect-ratio';
import FaTextHeight from 'react-icons/lib/fa/text-height';
import { Flex, Text } from '../base';
import { themeColors, transitions } from '../../styles';

const styles = {
  root: {
    cursor: 'pointer',
    ':hover': {
      opacity: 0.5,
      transition: `opacity ${transitions.duration} ${transitions.easing}`,
    },
  },
};

const promoIcons = {
  truck: MdLocalShipping,
  'add-logo': MdAspectRatio,
  personalization: FaTextHeight,
};

const iconComponent = (name) => {
  const SpecifiedIcon = promoIcons[name];

  return <SpecifiedIcon size={24} color={themeColors.white} />;
};

const Promo = ({ message, showModal }) => (

  <Flex
    flexDirection="row"
    flexWrap="nowrap"
    justifyContent="center"
    alignItems="center"
    p1
    css={styles.root}
    onClick={() => showModal(message.modal, { title: message.message, htmlContent:message.htmlContent })}
  >
    {iconComponent(message.icon)}
    <Text
      white
      bold
      ml2
      fontSize={6}
    >
      {message.message}
    </Text>
  </Flex>
);

Promo.propTypes = {
  message: PropTypes.shape({
    icon: PropTypes.string,
    message: PropTypes.string,
    action: PropTypes.string,
    modal: PropTypes.string,
    url: PropTypes.string,
  }),
  showModal: PropTypes.func,
};

export default Promo;
