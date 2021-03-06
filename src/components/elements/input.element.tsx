import React from 'react';
import styled from 'styled-components';
import { IInput } from '../../interfaces/input.interface';

const StyledInput = styled.input`
  height: 80px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 100;
  &:focus-visible {
    outline: none;
  }
  font-family: 'Roboto';
  margin: 0 10px;
  padding: 0 20px;
`;

export const Input: React.FC<IInput> = ({ setInput }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value.length > 2 && setInput(e.target.value);
  };
  return (
    <StyledInput
      type='text'
      onChange={onChangeHandler}
      placeholder='Enter character name...'
    />
  );
};
