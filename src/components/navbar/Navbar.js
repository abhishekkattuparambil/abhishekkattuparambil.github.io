import './style.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import sun from '../../images/sun.png'
import moon from '../../images/moon.png'
import useLocalStorage from 'use-local-storage'

const Navbar = () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', dark ? 'dark' : 'light');
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

    function toggleHamburger(icon) {
        icon.classList.toggle("change");
      }
    
    return (
        <nav className='nav'>
            <a href="/"><h2>Home</h2></a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul className='menu'>
                <li>
                    <Link to={"/experience"}><h3>Experience</h3></Link>
                </li>
                <li>
                    <Link to={"/projects"}><h3>Projects</h3></Link>
                </li>
                <li>
                    <Link to={"/about"}><h3>About</h3></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;