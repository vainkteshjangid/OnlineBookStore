package com.cg;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.cg.bookStore.entities.BookCategory;

@SpringBootApplication
@Transactional
public class BookStoreBackendApplication implements CommandLineRunner{
	@PersistenceContext
	EntityManager em;

	public static void main(String[] args) {
		SpringApplication.run(BookStoreBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		BookCategory c1=new BookCategory();
		BookCategory c2=new BookCategory();
		c1.setCategoryName("Self Help");
		c2.setCategoryName("Horror");
		em.persist(c1);
		em.persist(c2);
		
	}

}
