// import { Link } from 'react-router-dom';
import hellokitty from '../../assets/hello-kitty.svg';
import dropdown from '../../assets/dropdown-arrow.svg'
import './Header.css'

function Header(){
   return(
    <>
        <header className='header'>
            <div>
                <img src={hellokitty} alt="Hello Kitty icon"/>
                <h1>DS Visualizer</h1>
            </div>
            <nav>
                <ul>
                    {/* TODO: Add Routing to other pages */}
                    {/* <li><link>Home</link></li>
                    <li><link>About Me</link></li>
                    <li><link>Dashboard</link></li> */}
                    <li>Home</li>
                    <li>About Me</li>
                    <li className="dropdown">
                        Dashboard
                        <img src={dropdown} alt="dropdown arrow"/>
                    </li>
                </ul>
            </nav>
        </header>
    </>
   )
}

export default Header