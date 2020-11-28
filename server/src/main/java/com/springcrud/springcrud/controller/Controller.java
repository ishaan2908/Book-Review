package com.springcrud.springcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrud.springcrud.entities.Book;
import com.springcrud.springcrud.services.BookService;

@RestController
public class Controller {
	
	@Autowired
	private BookService bookService;
	
	// Get All Books
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/books")
	public ResponseEntity<List<Book>> getBooks() {
		try {
			List<Book> books = this.bookService.getBooks();
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	// Get a Single Book
	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/books/{bookId}")
	public ResponseEntity<Book> getBook(@PathVariable String bookId) {
		try {
			Book book = this.bookService.getBook(Integer.parseInt(bookId));
			return new ResponseEntity<>(book, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	// Add a New Book
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/books")
	public ResponseEntity<String> addBook(@RequestBody Book book) {
		try {
			this.bookService.addBook(book);
			return new ResponseEntity<>("Book Added", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Update a Book
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/books")
	public ResponseEntity<String> updateBook(@RequestBody Book book) {
		try {
			this.bookService.updateBook(book);
			return new ResponseEntity<>("Book Updated", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Delete a Book
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/books/{bookId}")
	public ResponseEntity<String> deleteBook(@PathVariable String bookId) {
		try {
			this.bookService.deleteBook(Integer.parseInt(bookId));
			return new ResponseEntity<>("Book Deleted", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
