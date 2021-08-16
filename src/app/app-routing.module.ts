
import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CreateuserComponent } from './createuser/createuser.component';
import { ListComponent } from './list/list.component';
import { TestComponent } from './test/test.component';




const routes: Routes = [

    {path:'' , component:ListComponent},
    {path:'create' , component: CreateuserComponent},
   {path:'test' , component: TestComponent}
  
    
    
]
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
