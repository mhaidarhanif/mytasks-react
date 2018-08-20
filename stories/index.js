import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Cover from '../src/Cover'

storiesOf('Cover', module)
  .add('Default 1', () => (
    <Cover onClick={action('clicked')}>Hello Cover</Cover>
  ))
  .add('Default 2', () => (
    <Cover onClick={action('clicked')}>Hello Cover</Cover>
  ))
