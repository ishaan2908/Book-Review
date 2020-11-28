import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Welcome.module.css';

const Welcome = () => {
	return (
		<div className = {classes.Welcome}>
			<h1 className = {classes.heading}>
				Read a Book Recently?
			</h1>
			<NavLink to = "/add-review" exact className = {classes.content}>
			 	Add a Review 
			</NavLink>
		</div>
	);
};

export default Welcome;