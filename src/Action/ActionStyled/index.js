import styled from 'styled-components'

const ActionStyled = styled.button`
  background: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  height: 30px;
  margin: 5px;
  padding: 0;
  width: 30px;

  color: ${({ completed }) => (completed ? '#fff' : '#ccc')};
  background: ${({ completed }) =>
    completed ? 'hsla(140, 50%, 50%, 1)' : null};
  border: ${({ completed }) =>
    completed ? '2px solid hsla(140, 50%, 50%, 1)' : '4px solid #ccc'};

  &::after {
    content: '✔';
    color: ${({ completed }) => (completed ? '#fff' : 'transparent')};
  }

  &:focus {
    outline: none;
  }

  &:hover::after {
    color: ${({ completed }) => (completed ? '#fff' : '#ccc')};
  }
`

export default ActionStyled
