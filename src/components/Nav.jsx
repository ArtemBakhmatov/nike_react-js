import { useState, useEffect } from 'react';
import { navLinks } from '../constants';

import { headerLogo } from '../assets/images';
import { hamburgerBlack, hamburgerWhite } from '../assets/icons';
import ButtonThemeColor from './ButtonThemeColor';

const Nav = () => {
    const [theme, setTheme] = useState(null);
    const [navMenu, setNavMenu] = useState('nav-menu');

    useEffect(() =>{
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() =>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeColor = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        if (navMenu === 'nav-menu-active') {
            document.querySelector('.nav-menu').classList.add('nav-menu-active');
            document.querySelector('.nav-menu').classList.add('fade');
            document.querySelector('.close').style.display = 'block';
            document.querySelector('.hamburger').style.display = 'none';
            document.querySelector('.main__title').style.zIndex = '0'
            document.body.style.overflowY = 'hidden'
        } else {
            document.querySelector('.nav-menu').classList.remove('nav-menu-active');
            document.querySelector('.nav-menu').classList.remove('fade');
            document.querySelector('.close').style.display = '';
            document.querySelector('.hamburger').style.display = '';
            document.querySelector('.main__title').style.zIndex = ''
            document.body.style.overflowY = ''
        }
    },[navMenu])

    const handleClickMenu = () => {
        setNavMenu('nav-menu-active');
    }

    const closeClickMenu = () => {
        setNavMenu('nav-menu');
    }
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img 
                        src={ headerLogo } 
                        alt="Logo" 
                        width={ 130 }
                        height={ 29 }
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 nav-menu'>
                    { navLinks.map(item => 
                        <li key={ item.label }>
                            <a 
                                onClick={ () => closeClickMenu()}
                                href={ item.href }
                                className='font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-100 max-lg:text-xl max-lg:text-gray-200 max-lg:font-bold'
                            >{ item.label }</a>
                        </li>
                    )}
                    <li>
                        <ButtonThemeColor 
                            handleThemeColor={ handleThemeColor } 
                            theme={ theme }
                        />
                    </li>
                </ul>
                <div className='hidden max-lg:block hamburger'>
                    <img 
                        src={ theme === 'dark' ? hamburgerWhite : hamburgerBlack } 
                        alt="Hamburger" 
                        width={ 25 }
                        height={ 25 }
                        onClick={ () => handleClickMenu() }
                    />
                </div>
                <div className='hidden close' onClick={ () => closeClickMenu()}>
                    &times;
                </div>
            </nav>
        </header>
    );
};

export default Nav;