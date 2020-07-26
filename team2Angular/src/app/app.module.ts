import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DisplayBooksComponent,
    UpdateBooksComponent,
    CreateBooksComponent,
    DeleteCategoryComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
