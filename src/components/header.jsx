import React from 'react';
import './styles/header.scss';

function Header(){
    return(
        <div className='header'>
            <h1 className='header__title'>WordWorld</h1>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/1388/1388855.png" alt="Sign in" className='signInImg'/>
                <span>Sign In</span>
            </div>
        </div>
    );
}
export default Header;