import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Flex } from './components/markup/flex.markup';
import { Wrapper } from './components/markup/wrapper.markup';
import { GET_CHARACTERS } from './other/getChatactersByName';
import { Input } from './components/elements/input.element';

export const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [party, setParty] = useState<{}>({});
  const [loadCharacters, { loading, data }] = useLazyQuery(GET_CHARACTERS, {
    variables: {
      name: input,
    },
  });
  return (
    <Wrapper>
      <Flex>
        <Input setInput={setInput} />
      </Flex>
    </Wrapper>
  );
};
