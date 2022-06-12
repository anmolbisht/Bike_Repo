import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AppComponent,
    ViewRegistrationComponent,
   
  ],
  imports: [
   
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
    
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
