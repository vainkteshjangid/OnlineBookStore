import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/assets/BookCategory';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { ManageCategoryService } from '../manage-category.service';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {

  constructor(private router:Router,private communicationService:CommunicationService) { }

  service:ManageCategoryService;
  category:BookCategory=new BookCategory();
  

  ngOnInit() {
    this.category.categoryId=100;
    this.category.categoryName="Adventure";
  }

  sendCategoryForUpdate(category:BookCategory):void{
    this.communicationService.sendCategoryForUpdate(category);
    this.router.navigateByUrl('/manageCategory/update');
    
  }

}
