// Vendors
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';
// Components
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
