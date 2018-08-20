import React from 'react'
import styled from 'styled-components'

const FormTaskAddStyled = styled.form`
  padding: 20px;
  margin: 0;
  color: #ccc;
`

const InputTaskAddStyled = styled.input`
  padding: 8px 15px;
  margin: 0;
  transition: 200ms;

  &::selection {
    background: hsla(190, 100%, 50%, 0.2);
  }

  &::placeholder {
    color: hsla(190, 100%, 50%, 1);
    transition: 200ms;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: #ccc;
  }

  &:focus .action.add::after {
    content: url('../../public/images/plus-gray.svg');
  }
`

const ButtonTaskAddStyled = styled.button`
  background: none;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  float: left;

  &::after {
    content: url('../../public/images/plus.svg');
    font-weight: 900;
    color: hsla(190, 100%, 50%, 1);
    transition: 200ms;
  }
`

const FormTaskAdd = () => (
  <FormTaskAddStyled autocomplete="off" className="segment add">
    <InputTaskAddStyled
      className="insert add"
      type="text"
      placeholder="What do you want to do?"
      autoFocus
    />
    <ButtonTaskAddStyled
      className="action add"
      type="submit"
      title="Action to do"
      role="checkbox"
      aria-checked="false"
    />
  </FormTaskAddStyled>
)

export default FormTaskAdd
