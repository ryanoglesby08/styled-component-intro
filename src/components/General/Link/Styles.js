import styled from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

export const StyledLink = styled.a`
  color: ${prop('theme.colors.primary')};
  font-family: ${prop('theme.fonts.telus')};
  transition: .3s;
  transform: scale(1);
  display: inline-block;
  :hover {
    transform: scale(1.5);
    text-decoration: none;
  }
`;