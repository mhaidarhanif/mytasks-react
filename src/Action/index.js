import React from 'react'
import PropTypes from 'prop-types'

import ActionStyled from './ActionStyled'

const Action = ({ completed }) => (
  <ActionStyled
    role="checkbox"
    aria-checked={completed}
    completed={completed}
  />
)

Action.propTypes = {
  completed: PropTypes.bool
}

export default Action
