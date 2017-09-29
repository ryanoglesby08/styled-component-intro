import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Styles';

const Link = props => {
  return (
    <StyledLink href={props.href}>
      {props.children}
    </StyledLink>
  );
};

Link.propTypes = {
  
};
export default Link;