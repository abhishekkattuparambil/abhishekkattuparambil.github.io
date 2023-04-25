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
    
    return (
        <nav className='nav'>
            <a href="/"><h2>Home</h2></a>
            <ul className='links'>
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