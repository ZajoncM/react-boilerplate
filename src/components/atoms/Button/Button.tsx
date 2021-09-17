import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
