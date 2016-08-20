
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../src/Icon'

const sx = {
  root: {
    padding: 48
  },
  row: {
    display: 'flex',
    marginLeft: -32,
    marginRight: -32
  },
  icon: {
    margin: 32
  }
}

const App = () => (
  <div style={sx.root}>
    <h1>Hello</h1>
    <div style={sx.row}>
      <Icon style={sx.icon} size={32} name='twitter' />
      <Icon style={sx.icon} size={32} name='facebook' />
      <Icon style={sx.icon} size={32} name='instagram' />
      <Icon style={sx.icon} size={32} name='linkedin' />
      <Icon style={sx.icon} size={32} name='soundcloud' />
      <Icon style={sx.icon} size={32} name='snapchat' />
    </div>
  </div>
)

ReactDOM.render(<App />, app)

