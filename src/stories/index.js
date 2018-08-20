import React from 'react'
import { storiesOf } from '@storybook/react'

import App from '../App'
import Page from '../Page'
import Cover from '../Cover'
import Header from '../Header'
import Todos from '../Todos'
import Footer from '../Footer'

storiesOf('App', module).add('Default', () => <App>App</App>)
storiesOf('Page', module).add('Default', () => <Page>Page</Page>)
storiesOf('Cover', module).add('Default', () => <Cover>Cover</Cover>)
storiesOf('Header', module).add('Default', () => <Header>Header</Header>)
storiesOf('Todos', module).add('Default', () => <Todos>Todos</Todos>)
storiesOf('Footer', module).add('Default', () => <Footer>Footer</Footer>)
