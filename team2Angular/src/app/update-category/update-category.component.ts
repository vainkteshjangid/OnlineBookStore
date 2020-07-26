import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookStoreService } from '../book-store.service';
import { Category } from '../Model/Category';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  currentCategory : Category= new Category();
  updatedCategory:Category=new Category();
  successMessage;
  errorMessage;
  showSuccessMessage:boolean;
  showErorrMessage:boolean;

  ngOnInit() {
    this.getCategoryForUpdate();
  }

  constructor(private bookStoreService: BookStoreService,private communicationService:CommunicationService, private route: ActivatedRoute){}

  getCategoryForUpdate(){
    this.communicationService.getCategoryForUpdate().subscribe(v=>{
      this.currentCategory.categoryId=v.categoryId;
      this.currentCategory.categoryName=v.categoryName;
    })
  }

  saveCategoryUpdate():void{
    this.updatedCategory.categoryId=this.currentCategory.categoryId;
    this.bookStoreService.updateCategory(this.updatedCategory).subscribe(data=>{
      this.successMessage=data,
      this.showSuccessMessage=true,
      this.currentCategory.categoryName=this.updatedCategory.categoryName,
      this.updatedCategory.categoryName=""
    },
    (error:HttpErrorResponse)=>{
      this.errorMessage=error.error.message,
      this.showErorrMessage=true
    })
  }

 
  }  
  



