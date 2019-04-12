import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RetrievedataService} from './services/retrievedata.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewcatlistComponent } from './views/viewcatlist/viewcatlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewcatlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RetrievedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
