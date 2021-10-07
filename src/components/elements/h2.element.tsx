import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #000000;
`;

export const H2: React.FC = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};
