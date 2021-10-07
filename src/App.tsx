import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_CHARACTERS } from './other/getChatactersByName';

export const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [party, setParty] = useState<{}>({});
  const [loadCharacters, { loading, data }] = useLazyQuery(GET_CHARACTERS, {
    variables: {
      name: input,
    },
  });
  return <div></div>;
};
