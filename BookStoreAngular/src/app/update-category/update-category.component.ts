import { Component, OnInit } from '@angular/core';
import { ManageCategoryService } from '../manage-category.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  currentCategory:BookCategory;
  updatedCategory:BookCategory;

  constructor(private service:ManageCategoryService) { 
    // this.currentCategory.categoryId;
    // this.currentCategory.categoryName;
  }

  ngOnInit() {
  }

  updateCategory():void{
    this.updatedCategory.categoryId=this.currentCategory.categoryId;
    this.service.updateCategory(this.updatedCategory).subscribe(data=>{

    },
    (error:HttpErrorResponse)=>{
      console.log("Error occurred:"+error);
    })
  }

}
