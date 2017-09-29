import React from 'react';
import { oneOf } from 'prop-types';
import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  InvertedButton,
  DisabledButton
} from './Styles.js';

const Button = ({ variant, disabled, children, ...rest }) => {
  const getBtnType = (variant, disabled) => {
    if(disabled){
      return DisabledButton;
    }
    switch (variant) {
      case 'primary': return PrimaryButton;
      case 'secondary': return SecondaryButton;
      case 'inverted': return InvertedButton;
      case 'danger': return DangerButton;
      default: return PrimaryButton;
    }
  };
  const Btn = getBtnType(variant, disabled);
  return (
    <Btn {...rest} disabled={disabled}>{children}</Btn>
  );
};

Button.propTypes = {
  /**
   * available variants: primary, secondary, inverted, danger
   */
  variant: oneOf(['primary', 'secondary', 'inverted', 'danger'])
};

Button.defaultProps = {
  variant: 'primary'
};

export default Button;