import React from 'react'
import Logo from './logo'
import Lines from './lines'

const Main = props => (
  <div className='Main'>
    <Lines
      lines={props.lines}
    />
    <Logo
      onToggleAbout={props.onToggleAbout}
    />
  </div>
)
export default Main
