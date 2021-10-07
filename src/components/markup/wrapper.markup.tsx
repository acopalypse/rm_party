import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 810px;
  margin: 15px auto;
  font-family: 'Roboto';
`;

export const Wrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
