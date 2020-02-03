// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IndexComponent } from 'src/app/index/index.component';

const routes: Routes = [
    {
      path: '',
      component: IndexComponent,
      children: [
        {
          path: '',
          redirectTo: '/index/content',
          pathMatch: 'full',
        },
        {
          path: 'content',
          loadChildren: 'src/app/index/content/content.module#ContentModule',
        },
        {
          path: 'product/:id',
          loadChildren: 'src/app/index/product/product.module#ProductModule',
        }
      ]
    },
  ];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class IndexRoutingModule { }
