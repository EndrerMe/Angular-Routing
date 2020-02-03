// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index2',
    pathMatch: 'full',
  },
  {
    path: 'index',
    loadChildren: 'src/app/index/index.module#IndexModule'
  },
  {
    path: 'index2',
    loadChildren: 'src/app/index2/index2.module#Index2Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
