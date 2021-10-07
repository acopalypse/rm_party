import React from 'react';
import styled from 'styled-components';
import { Img } from './elements/img.element';
import { H3 } from './elements/h3.element';
import { IPartyItem } from '../interfaces/party.interface';

const StyledOutputItem = styled.div`
  width: 180px;
  height: 220px;
  overflow: hidden;
  margin: 11px;
  position: relative;
  background-color: #dadada;
`;

export const PartyItem: React.FC<IPartyItem> = ({ name, character }) => {
  return (
    <StyledOutputItem>
      {character && <Img src={character!.image} alt={character!.name} />}
      {!character && <H3>{name}</H3>}
    </StyledOutputItem>
  );
};
