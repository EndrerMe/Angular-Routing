// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IndexComponent } from 'src/app/index/index.component';
// Routing
import { IndexRoutingModule } from 'src/app/index/index-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  declarations: [
    IndexComponent,
  ],
})
export class IndexModule { }
