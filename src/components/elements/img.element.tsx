import React from 'react';
import styled from 'styled-components';
import { IImg } from '../../interfaces/img.interface';

const StyledImg = styled.img`
  width: auto;
  height: 220px;
`;

export const Img: React.FC<IImg> = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};
