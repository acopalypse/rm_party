import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  text-transform: uppercase;
  font-weight: 100;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const H3: React.FC = ({ children }) => {
  return <StyledH3>{children}</StyledH3>;
};
