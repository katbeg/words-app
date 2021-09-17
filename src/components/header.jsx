import React, { Fragment } from 'react';
import './styles/header.scss';
import {Link } from 'react-router-dom';

function Header(){
    return(
        <Fragment className='header-wrap'>
        <div className='header'>
            <div className='header__container-left'>
                <Link to='/'>
                    <img className='header__container-left__logo' src="https://cdn-icons-png.flaticon.com/512/4743/4743188.png" alt="App logo" />
                </Link>
                <h1 className='header__container-left__title'>WordWorld</h1>
            </div>
            <nav className='header__nav'>
                    <Link className='header__nav__link' to='/game'>Game</Link>
                    <Link className='header__nav__link' to='/'>Main</Link>
            </nav>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/1388/1388855.png" alt="Sign in" className='signInImg'/>
                <span>Sign In</span>
            </div>
        </div>
        </Fragment>
    );
}
export default Header;