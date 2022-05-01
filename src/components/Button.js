import React from 'react'
import PropTypes from 'prop-types'

const Button = ({bgcolor,text,onClick}) => {
  return (
      
   <button onClick={onClick} style={{backgroundColor: bgcolor}} className='text-slate-100  w-32 h-12 '>{text}</button> 
    
  )
}

Button.defaultProps={
  color:'steelblue',
  text:'yes click'
}

Button.propTypes={
  text: PropTypes.string,
  bgcolor:PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
