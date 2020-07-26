import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from './Model/Category';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private category = new BehaviorSubject<Category>({"categoryId":null,"categoryName":null});

  constructor() { }


  sendCategoryForUpdate(category:Category) { 
    this.category.next(category); 
} 
getCategoryForUpdate(): Observable<Category> { 
    return this.category.asObservable(); 
}
}
