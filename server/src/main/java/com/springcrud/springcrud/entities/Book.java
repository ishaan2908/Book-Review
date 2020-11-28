package com.springcrud.springcrud.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id
	private int id;
	private String name;
	private String author;
	private String review;
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Book(int id, String name, String author, String review) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
		this.review = review;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", author=" + author + ", review=" + review + "]";
	}
	
}
