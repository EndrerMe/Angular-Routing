// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Product2Component } from 'src/app/index2/product2/product2.component';

const routes: Routes = [
  {
    path: '',
    component: Product2Component,
  }
]

@NgModule({
  declarations: [Product2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Product2Module { }
