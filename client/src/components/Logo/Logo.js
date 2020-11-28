import React from 'react';
import bookLogo from '../../assets/Images/book-logo.png';
import classes from './Logo.module.css';

const Logo = () => (
	<div className = {classes.Logo}>
		<img src = {bookLogo} alt = "BOOKS"/>
	</div>
);

export default Logo;