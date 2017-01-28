import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { DestinationComponent } from './destination/destination.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
