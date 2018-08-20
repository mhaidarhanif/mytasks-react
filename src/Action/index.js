import React from 'react'
import PropTypes from 'prop-types'

import ActionStyled from './ActionStyled'

const Action = ({ completed, handleComplete }) => (
  <ActionStyled
    role="checkbox"
    aria-checked={completed}
    completed={completed}
    onClick={handleComplete}
  />
)

Action.propTypes = {
  completed: PropTypes.bool,
  handleComplete: PropTypes.func
}

export default Action
