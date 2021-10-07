import React from 'react';
import { IOutputArea } from '../interfaces/output.interface';
import { Flex } from './markup/flex.markup';
import { OutputItem } from './outputItem.component';

export const OutputArea: React.FC<IOutputArea> = ({ data, setParty }) => {
  const { results } = data.characters;
  return (
    <Flex>
      {results.map(
        (character) =>
          !character.block && (
            <OutputItem
              key={character.id}
              character={character}
              setParty={setParty}
            />
          ),
      )}
    </Flex>
  );
};
