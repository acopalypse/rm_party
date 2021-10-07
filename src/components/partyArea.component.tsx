import React from 'react';
import { H2 } from './elements/h2.element';
import { Flex } from './markup/flex.markup';
import { IPartyArea } from '../interfaces/party.interface';
import { PartyItem } from './partyItem.component';

export const PartyArea: React.FC<IPartyArea> = ({ party }) => {
  return (
    <>
      <H2>Party</H2>
      <Flex>
        <PartyItem name='Rick' character={party.rick} />
        <PartyItem name='Morty' character={party.morty} />
      </Flex>
    </>
  );
};
