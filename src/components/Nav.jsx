import { useState, useEffect } from 'react';
import { navLinks } from '../constants';

import { headerLogo } from '../assets/images';
import { hamburgerBlack, hamburgerWhite } from '../assets/icons';
import ButtonThemeColor from './ButtonThemeColor';

const Nav = () => {
    const [theme, setTheme] = useState(null);

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
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    { navLinks.map(item => 
                        <li key={ item.label }>
                            <a 
                                href={ item.href }
                                className='font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-100'
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
                <div className='hidden max-lg:block'>
                    <img 
                        src={ theme === 'dark' ? hamburgerWhite : hamburgerBlack } 
                        alt="Hamburger" 
                        width={ 25 }
                        height={ 25 }
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;