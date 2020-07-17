package com.cg.bookStore.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.cg.bookStore.entities.BookCategory;
import com.cg.bookStore.entities.BookInformation;

@Repository
public class BookStoreDaoImpl implements BookStoreDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	public boolean createCategory(BookCategory category){
		em.persist(category);
		return true;
	}
	
	
	@Override
	public String updateCategory(BookCategory category) {
		// TODO Auto-generated method stub
		String str="SELECT category FROM BookCategory category WHERE category.categoryName=:newCategoryName";
		TypedQuery<BookCategory> query=em.createQuery(str,BookCategory.class);
		query.setParameter("newCategoryName", category.getCategoryName());
		try {
			BookCategory res=query.getSingleResult();
		}catch(NoResultException e) {
			String str2="update BookCategory category set category.categoryName=:newCategoryName where category.categoryId=:id";
			Query query2=em.createQuery(str2);
			query2.setParameter("newCategoryName", category.getCategoryName());
			query2.setParameter("id", category.getCategoryId());
			int result=query2.executeUpdate();
			return "Category updated successfully";
		}
		return "There is already a category named "+category.getCategoryName();
	}
	
	public boolean findCategory(String categoryName) {
		String jpql = "from BookCategory b where b.categoryName=:cName";
		TypedQuery<BookCategory> query = em.createQuery(jpql, BookCategory.class);
		query.setParameter("cName",categoryName);
	    List<BookCategory> existingCat = query.getResultList();
	    if(existingCat.isEmpty()) {
	    	return false;
	    }
	    return true;
	}

	@Override
	public boolean deleteBook(int bookId) {
		BookInformation book = em.find(BookInformation.class, bookId);
		if(book!=null) {
			em.remove(book);
			return true;
		}
		return false;
	}
	

	@Override
	public boolean addBook(BookInformation bookInfo) {
		em.persist(bookInfo);
		return true;
	}

}
