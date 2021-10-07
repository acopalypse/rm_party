import React from 'react';
import styled from 'styled-components';
import { IOutputItem } from '../interfaces/output.interface';
import { Img } from './elements/img.element';
import { Button } from './elements/button.element';

const StyledOutputItem = styled.div`
  width: 180px;
  height: 220px;
  overflow: hidden;
  margin: 11px;
  position: relative;
  background-color: #dadada;
  cursor: pointer;
`;

export const OutputItem: React.FC<IOutputItem> = ({ character, setParty }) => {
  const clickHandler = () => {
    const name = character.name.toLocaleLowerCase();
    if (name.search('rick') !== -1) {
      setParty((prev) => ({ ...prev, rick: character }));
    } else if (name.search('morty') !== -1) {
      setParty((prev) => ({ ...prev, morty: character }));
    }
  };
  return (
    <StyledOutputItem onClick={clickHandler}>
      <Img src={character!.image} alt={character!.name} />
      <Button id={character!.id} />
    </StyledOutputItem>
  );
};
