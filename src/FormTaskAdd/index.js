import React from 'react'
import PropTypes from 'prop-types'

import FormTaskAddStyled from './FormTaskAddStyled'

class FormTaskAdd extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      input: ''
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.handleAdd(this.state.input)

    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <FormTaskAddStyled
        inputValue={this.state.input}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

FormTaskAdd.propTypes = {
  handleAdd: PropTypes.func
}

export default FormTaskAdd
