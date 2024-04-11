import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from  '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule } from '@angular/material/table'

const MaterialComponents =[
  MatSlideToggleModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
]

@NgModule({
  imports:[MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
