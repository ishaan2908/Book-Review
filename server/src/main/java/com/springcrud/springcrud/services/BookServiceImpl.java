package com.springcrud.springcrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springcrud.springcrud.dao.BookDao;
import com.springcrud.springcrud.entities.Book;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao bookDao; // from the Dao Layer
	
//	public BookServiceImpl() {
//
//	}
	
	@Override
	public List<Book> getBooks() {
		return bookDao.findAll();
	}
	
	@Override
	public Book getBook(int bookId) {
		return bookDao.getOne(bookId);
	}
	
	@Override
	public Book addBook(Book book) {
		return bookDao.save(book);
	}
	
	@Override
	public Book updateBook(Book book) {
		return bookDao.save(book);
	}

	@Override
	public void deleteBook(int bookId) {
		Book book = bookDao.getOne(bookId);
		bookDao.delete(book);
	}

}
