import React from 'react'

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
    const input = event.target.value
    this.setState({
      input
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log({ input: this.state.input })

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

export default FormTaskAdd
