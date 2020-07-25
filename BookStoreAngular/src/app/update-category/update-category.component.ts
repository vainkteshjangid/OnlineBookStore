import { Component, OnInit } from '@angular/core';
import { ManageCategoryService } from '../manage-category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BookCategory } from 'src/assets/BookCategory';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  currentCategory:BookCategory=new BookCategory();
  updatedCategory:BookCategory=new BookCategory();
  successMessage;
  errorMessage;
  showSuccessMessage:boolean;
  showErorrMessage:boolean;

  constructor(private service:ManageCategoryService,private communicationService:CommunicationService) { 
    this.updatedCategory.categoryName="";
  }

  ngOnInit() {
   this.getCategoryForUpdate();
  }

  getCategoryForUpdate(){
    this.communicationService.getCategoryForUpdate().subscribe(v=>{
      this.currentCategory.categoryId=v.categoryId;
      this.currentCategory.categoryName=v.categoryName;
    })
  }

  saveCategoryUpdate():void{
    this.updatedCategory.categoryId=this.currentCategory.categoryId;
    this.service.updateCategory(this.updatedCategory).subscribe(data=>{
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
