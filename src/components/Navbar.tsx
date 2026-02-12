import './Navbar.css'

function NavBar() {
  return(
    <nav>
      {/*TODO: Add navigation links */}
      <ul className='navigation'>
        <li><a href=''>Home</a></li> 
        <li><a href=''>Data Structures</a></li>
        <li><a href=''>Algorithms</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;