import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools'
import media from '../../../foundation/mediaQueries';

const Button = styled.button`
  display: block;
  width: 100%;
  padding: ${prop('theme.spaces.base')} ${prop('theme.spaces.wide')};
  transition: background 0.2s;
  font-family: ${prop('theme.fonts.telus')};
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: -0.8px;
  line-height: 1.5;
  font-weight: ${prop('theme.fontWeights.medium')};
  border-width: 0;
  border-radius: 4px;
  
  :hover {
    box-shadow: 0 0 0 1px;
  }

  ${media.greaterThan('sm')`
    width: auto;
    display: inline-block;
    + button {
      margin-left: 16px;
    }
  `}
`;

export const PrimaryButton = Button.extend`
  background-color: ${prop('theme.colors.primary')};
  color: ${prop('theme.colors.white')};
  :hover {
    background-color: ${prop('theme.colors.white')};
    color: ${prop('theme.colors.primary')};
  }
`;

export const SecondaryButton = Button.extend`
  background-color: ${prop('theme.colors.secondary')};
  color: ${prop('theme.colors.white')};
  :hover {
    background-color: ${prop('theme.colors.white')};
    color: ${prop('theme.colors.secondary')};
  }
`;

export const DisabledButton = Button.extend`
  background-color: ${prop('theme.colors.athensGrey')};
  color: ${prop('theme.colors.disabled')};
  cursor: not-allowed;
  :hover {
    box-shadow: none;
  }
`;

export const DangerButton = Button.extend`
  background-color: ${prop('theme.colors.danger')};
  color: ${prop('theme.colors.white')};
  :hover {
    background-color: ${prop('theme.colors.white')};
    color: ${prop('theme.colors.danger')};
  }
`;

export const InvertedButton = Button.extend`
  background-color: ${prop('theme.colors.white')};
  color: ${prop('theme.colors.shark')};
  
  :hover {
    box-shadow: 0 0 0 1px;
    background-color: transparent;
    color: ${prop('theme.colors.white')};
  }
`;