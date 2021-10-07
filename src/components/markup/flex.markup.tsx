import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

export const Flex: React.FC = ({ children }) => {
  return <StyledFlex>{children}</StyledFlex>;
};
