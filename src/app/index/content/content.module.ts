// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ContentComponent } from 'src/app/index/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  }
]

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContentModule { }
