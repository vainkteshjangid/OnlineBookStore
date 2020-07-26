import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { Category } from '../Model/Category';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {

  constructor(private bookStoreService :BookStoreService,private communicationService:CommunicationService,private router:Router) { }
  category: any;
  showError: boolean;
  showData:boolean;
  errorMessage: String;

  ngOnInit() {
    this.bookStoreService.displayAllCategory().subscribe(
      data=>{this.category=data, this.showData=true},
      error=>{this.errorMessage= error.error.message, this.showError=true}
    )
  }

  sendCategoryForUpdate(category:Category):void{
    this.communicationService.sendCategoryForUpdate(category);
    this.router.navigateByUrl('/manageCategory/update');
    
  }




}
