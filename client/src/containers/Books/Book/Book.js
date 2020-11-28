import React from 'react';

import classes from './Book.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-books';

const Book = (props) => {

	const deleteBook = (id) => {
		axios.delete('/books/' + id)
			.then(res => {
				console.log(res);
				props.removeBook(id);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className = {classes.Book}>
			<p>
				<span className = {classes.label} >Title: </span> 
				{props.title}
			</p>
			<p>
				<span className = {classes.label} >Author Name: </span> 
				{props.author}
			</p>
			<p>
				<span className = {classes.label} >Review: </span> 
				{props.review}
			</p>
			<Button 
				btnType = "Danger"
				clicked = {() => deleteBook(props.id)} >Delete Book Review</Button>
		</div>	
	);
};

export default Book;