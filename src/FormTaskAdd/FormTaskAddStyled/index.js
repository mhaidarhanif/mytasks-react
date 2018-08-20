import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form`
  padding: 20px;
  margin: 0;
  color: #ccc;
`

const Input = styled.input`
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
    content: url('/images/plus-gray.svg');
  }
`

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  float: left;

  &::after {
    content: url('/images/plus.svg');
    font-weight: 900;
    color: hsla(190, 100%, 50%, 1);
    transition: 200ms;
  }
`

const FormTaskAddStyled = ({ inputValue, onSubmit, onChange }) => (
  <Form autocomplete="off" onSubmit={onSubmit}>
    <Input
      placeholder="What do you want to do?"
      type="text"
      autoFocus
      value={inputValue}
      onChange={onChange}
    />
    <Button
      title="Action to do"
      type="submit"
      role="checkbox"
      aria-checked="false"
    />
  </Form>
)

FormTaskAddStyled.propTypes = {
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}

export default FormTaskAddStyled
