import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({ cls, icon, title, children }) => (
  <fieldset className={cls}>
    {/*<legend className={`${cls}-heading`}>
      <div className="grid-row align-center">
        {icon}
        <h5>{title}</h5>
      </div>
    </legend>*/}
    <div className={`${cls}-inner`}>
      {children}
    </div>
  </fieldset>
);

InfoBox.propTypes = {
  cls: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

InfoBox.defaultProps = {
  cls: 'info-link-box',
};

export default InfoBox;
