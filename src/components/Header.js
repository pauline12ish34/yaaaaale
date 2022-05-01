import PropTypes from 'prop-types'
import Button  from './Button'

const Header = ({title,show,showAdd}) => {


  return (
   <header className='grid grid-cols-2  p-8'>

<h2 className='text-3xl font-bold underline'>{title}</h2>

<Button bgcolor={showAdd ? 'red':'green'}  text={showAdd ? 'Close':'Add'} onClick={show}/>
{/* bg-lime-600 */}
   </header>
  )
}

Header.defaultProps={
  title:'TaskTracker',
}
Header.propTypes={
  title: PropTypes.string.isRequired
}

export default Header
