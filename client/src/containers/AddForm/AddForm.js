import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AddForm.module.css';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios-books';

const AddForm = (props) => {
	const [book, setBook] = useState({});
	const history = useHistory();

	const submitHandler = (event) => {
		event.preventDefault();
		postBooks(book);
		console.log(book);
		setTimeout(() => history.push('/books'), 500);
		// to-do: show a spinner
	};

	const onChangeHandler = (event, type) => {
		const value = event.target.value;
		setBook({
			...book,
			[type]: value
		})
	}

	const postBooks = (book) => {
		axios.post('/books', book)
			.then(res => {
				console.log(res);
				setBook(null);
			})
			.catch(err => {
				console.log(err);
				setBook(null);
			});
	};

	return (
		<div className = {classes.Form}>
			<h2>Add your Book Review here! </h2>
			
			<form onSubmit = {submitHandler}>
				
				<div className={classes.Input}>
					<label className = {classes.Label}>
			          Book Id
			        </label>
			        
			        <input
			        	placeholder="Book Id"
			        	type="number"
			        	className = {classes.InputElement} 
			        	onChange = {(event) => onChangeHandler(event, 'id')} />
		        </div>
		        
		        <div className={classes.Input}>
			        <label className = {classes.Label}>
			          Book Title
			        </label>
			        
			        <input
			        	placeholder="Book Title"
			        	type="text" 
			        	className = {classes.InputElement}
			        	onChange = {(event) => onChangeHandler(event, 'name')} />
		        </div>
		        
		        <div className={classes.Input}>
			        <label className = {classes.Label}>
			          Book Author
			        </label>
			        
			        <input
			        	placeholder="Book Author"
			        	type="text"
			        	className = {classes.InputElement}
			        	onChange = {(event) => onChangeHandler(event, 'author')} />
		        </div>
				
				<div className={classes.Input}>
			        <label className = {classes.Label}>
			          Book Review
			        </label>
			        
			        <input
			        	placeholder="Book Review"
			        	type="text"
			        	className = {classes.InputElement}
			        	onChange = {(event) => onChangeHandler(event, 'review')} />
				</div>
				
				<Button btnType = "Success">
					Add Book
				</Button>
			</form>
		</div>	
	);
};

export default AddForm;