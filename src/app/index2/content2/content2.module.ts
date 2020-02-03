// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Content2Component } from 'src/app/index2/content2/content2.component';

const routes: Routes = [
  {
    path: '',
    component: Content2Component,
  }
]

@NgModule({
  declarations: [Content2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Content2Module { }
