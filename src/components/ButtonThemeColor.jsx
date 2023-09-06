//import { useState, useEffect } from 'react';

import { sun } from '../assets/icons';
import { moon } from '../assets/icons';

const ButtonThemeColor = ({ handleThemeColor, theme }) => {
    // const [theme, setTheme] = useState('light');

    // useEffect(() =>{
    //     if (theme === 'dark') {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [theme]);

    // const handleThemeColor = () => {
    //     setTheme(theme === 'dark' ? 'liht' : 'dark');
    // }

    return (
        <button onClick={ handleThemeColor }>
            <img 
                src={ theme === 'dark' ? moon : sun } 
                alt={ theme === 'dark' ? 'moon' : 'sun' }  
                width={ 26 } 
                height={ 26 }
            />
        </button>
    );
};

export default ButtonThemeColor;