package com.springcrud.springcrud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrud.springcrud.entities.Book;

public interface BookDao extends JpaRepository<Book, Integer> {

}
