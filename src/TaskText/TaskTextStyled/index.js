import styled from 'styled-components'

const TaskTextStyled = styled.span`
  font-weight: 400;
  vertical-align: sub;
  margin: 10px;
  color: ${({ completed }) => (completed ? '#ccc' : null)};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : null)};
`

export default TaskTextStyled
