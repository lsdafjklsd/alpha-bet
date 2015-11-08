import React from 'react'

const chars = '.ABCD.EFGHIJKLMNOPQRSTUV.WXYZ.'.split('')

const Letters = props => (
  <div className='Letters'>
    {chars.map((char, i) => {
      const className = char === '.'? 'Letters-letter-blank' : ''
      return (
        <span className={className} key={i}>
          <span>{char}</span>
        </span>
      )
    })}
  </div>
)

export default Letters