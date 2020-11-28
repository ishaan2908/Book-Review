import React, { useState, useEffect, useRef } from 'react';
import Book from './Book/Book';
import axios from '../../axios-books';

const Books = () => {
	const [books, setBooks] = useState([]);
	// to not perform a React state update on an unmounted component
	const isMounted = useRef(true);

	useEffect(() => {
		if (isMounted.current) {
			fetchBooks();
		}
		// cleanup function
		return () => {
			isMounted.current = false;
	    };
	}, []);

	const fetchBooks = () => {
		axios.get('/books')
			.then(res => {
				// console.log(res);
		        setBooks(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const removeBook = (bookId) => {
		const updatedBooks = books.filter(book => {
			return book.id !== bookId
		});

		setBooks(updatedBooks);
	}

	let message = <h2>No Reviews are Available</h2>

	if(books.length !== 0) {
		message = <h2>Available Reviews!!</h2>
	}

	return (
		<div>
			{message}
			{
				books.map(book => {
					return <Book 
						key = {book.id}
						id = {book.id}
						title = {book.name}
						author = {book.author}
						review = {book.review}
						removeBook = {removeBook} />
				})
			}
		</div>
	);
};

export default Books;