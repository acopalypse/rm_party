import { Dispatch, SetStateAction } from 'react';
import { ICharacter } from './character.interface';

export interface IOutputArea {
  data: {
    characters: {
      results: ICharacter[];
    };
  };
  setParty: Dispatch<SetStateAction<{}>>;
}

export interface IOutputItem {
  character: ICharacter;
  setParty: Dispatch<SetStateAction<{}>>;
}
