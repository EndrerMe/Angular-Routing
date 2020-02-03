// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Index2Component } from 'src/app/index2/index2.component';

const routes: Routes = [
    {
      path: '',
      component: Index2Component,
      children: [
        {
          path: '',
          redirectTo: '/index2/content2',
          pathMatch: 'full',
        },
        {
          path: 'content2',
          loadChildren: 'src/app/index2/content2/content2.module#Content2Module',
        },
        {
          path: 'product2/:id',
          loadChildren: 'src/app/index2/product2/product2.module#Product2Module',
        }
      ]
    },
  ];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class Index2RoutingModule { }
