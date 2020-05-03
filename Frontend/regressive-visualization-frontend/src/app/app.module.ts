import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponentComponent } from './user-input-component/user-input-component.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponentComponent,
    ChartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
