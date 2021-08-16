import {  NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';


import { FormsModule } from '@angular/forms';








const materials = [
MatButtonModule,
MatTableModule,
MatToolbarModule,
MatIconModule,

MatCardModule,
MatGridListModule,
MatFormFieldModule,
MatSelectModule,
NbButtonModule,
NbThemeModule.forRoot({name:'default'}),
NbLayoutModule,
NbEvaIconsModule,
NbCardModule,
MatPaginatorModule,



FormsModule,




];

@NgModule({
  declarations: [],
  imports: [materials],
  exports:[materials]
})
export class MaterialModule { }
