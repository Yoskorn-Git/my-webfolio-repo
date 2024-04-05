import React from 'react';

const Placeholder = ({ className, width, height }) => {
  return(
    <svg class={ className } 
      style={{ maxWidth: `${Placeholder.defaultProps.maxWidth}` }}
      width={ width ? width : Placeholder.defaultProps.width } 
      height={ height ? height : Placeholder.defaultProps.width } role="img">
      <rect width="100%" height="100%" fill="#434e58"></rect>
    </svg>
  )
}

Placeholder.defaultProps = {
  width: '100%',
  height: '200px',
  maxWidth: '100%',
}

export default Placeholder;