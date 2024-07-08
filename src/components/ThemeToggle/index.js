import React, { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { loadTheme, toggleTheme } from '../../redux/themeSlice';
import "./index.css";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

    useEffect(() => {
        dispatch(loadTheme());
    }, [dispatch]);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <button onClick={handleToggle} className="theme-button">
            {isDarkTheme ?  <FaSun className='sun-icon'/>:<FaMoon className='moon-icon'/>}
        </button>
    );
};

export default ThemeToggle;
