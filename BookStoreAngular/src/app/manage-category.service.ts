import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoryService {
 

  constructor(private http:HttpClient) { }

  updateCategory(category: BookCategory):Observable<any> {
    let url='http://localhost:1136/manageCategory/update';
    return this.http.put(url,category);
  }

}
