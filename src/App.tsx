import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useMemo, useState } from 'react';
import { Flex } from './components/markup/flex.markup';
import { Wrapper } from './components/markup/wrapper.markup';
import { GET_CHARACTERS } from './other/getChatactersByName';
import { Input } from './components/elements/input.element';
import { OutputArea } from './components/outputArea.component';

export const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [party, setParty] = useState<{}>({});
  const [loadCharacters, { data }] = useLazyQuery(GET_CHARACTERS, {
    variables: {
      name: input,
    },
  });

  useEffect(() => {
    input.length > 2 && loadCharacters();
  }, [input, loadCharacters]);

  const MemoInput = useMemo(() => <Input setInput={setInput} />, [setInput]);

  return (
    <Wrapper>
      <Flex>{MemoInput}</Flex>
      {data && <OutputArea data={data} setParty={setParty} />}
    </Wrapper>
  );
};
