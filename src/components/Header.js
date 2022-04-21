import React from 'react'
import PropTypes from 'prop-types'



const Header = ({title}) => {
  return (
   <header>

<h2>{title}</h2>

   </header>
  )
}

Header.defaultProps={
  title:'TaskTracker',
}
Header.protoTypes={
  title: PropTypes.string.isRequired
}

export default Header
