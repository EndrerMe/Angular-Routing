// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { Index2Component } from 'src/app/index2/index2.component';
// Routing
import { Index2RoutingModule } from 'src/app/index2/index2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Index2RoutingModule
  ],
  declarations: [
    Index2Component
  ],
})
export class Index2Module { }
