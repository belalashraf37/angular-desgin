import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListComponent } from './list/list.component';
import {  MatTableModule } from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';


import { TestComponent } from './test/test.component';
import { CreateuserComponent } from './createuser/createuser.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';













@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateuserComponent,
    TestComponent,
    
    
    
   
    
    
    
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    
    MatSortModule,
    
    MatInputModule,
    
    MatPaginatorModule,
    MatTooltipModule,
    
    

   
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
