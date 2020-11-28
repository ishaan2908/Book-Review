import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
	return (
		<ul className = {classes.NavigationItems}>
			<NavigationItem link = "/" exact> Welcome </NavigationItem>
			<NavigationItem link = "/books" exact> All Book Reviews </NavigationItem>
			<NavigationItem link = "/add-review" exact> Add a Review </NavigationItem>
		</ul>
	);
};

export default NavigationItems;