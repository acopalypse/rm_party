import { ICharacter } from './character.interface';
export interface IPartyArea {
  party: {
    rick?: ICharacter;
    morty?: ICharacter;
  };
}
export interface IPartyItem {
  name: string;
  character?: ICharacter;
}
