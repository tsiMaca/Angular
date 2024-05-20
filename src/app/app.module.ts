import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsModule } from './pages/planets/planets.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    HttpClientModule, 
    PlanetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
