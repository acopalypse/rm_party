import { useApolloClient, gql } from '@apollo/client';
import styled from 'styled-components';
import { IButton } from '../../interfaces/button.interface';

const StyledButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 100%;
  border: none;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.75);
  cursor: pointer;
`;

export const Button: React.FC<IButton> = ({ id }) => {
  const client = useApolloClient();

  const blockHandler = (e: React.MouseEvent<HTMLElement>) => {
    client.writeFragment({
      id: `Character:${id}`,
      fragment: gql`
        fragment MyChar on Character {
          block
        }
      `,
      data: {
        block: true,
      },
    });
    e.stopPropagation();
  };

  return <StyledButton onClick={blockHandler}>X</StyledButton>;
};
