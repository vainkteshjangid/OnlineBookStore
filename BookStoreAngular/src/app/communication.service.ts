import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookCategory } from 'src/assets/BookCategory';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private category = new BehaviorSubject<BookCategory>({"categoryId":null,"categoryName":null});

  constructor() { }


  sendCategoryForUpdate(category: BookCategory) { 
    this.category.next(category); 
} 
getCategoryForUpdate(): Observable<BookCategory> { 
    return this.category.asObservable(); 
}
}
