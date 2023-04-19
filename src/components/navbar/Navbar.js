import './style.css'
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
            <a href="/"><h2>Abhishek Kattuparambil</h2></a>
            <ul className='links'>
                <li>
                <a href="/experience"><h3>Experience</h3></a>
                </li>
                <li>
                <a href="/projects"><h3>Projects</h3></a>
                </li>
                <li>
                <a href="/about"><h3>About</h3></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;