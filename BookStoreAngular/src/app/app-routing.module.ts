import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';




const routes:Routes=[
    {path:'',component:DisplayCategoryComponent},
    {path:'manageCategory/update',component:UpdateCategoryComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ };