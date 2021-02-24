// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, className='', ...otherProps}) {
  const boxSize = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${boxSize}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    ></div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
