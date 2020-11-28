package com.springcrud.springcrud.services;

import java.util.List;

import com.springcrud.springcrud.entities.Book;

public interface BookService {

	public List<Book> getBooks();
	
	public Book getBook(int bookId);
	
	public Book addBook(Book book);

	public Book updateBook(Book book);

	public void deleteBook(int bookId);
	
}
