import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JyotiComponent } from './jyoti/jyoti.component';
import { TIMTComponent } from './timt/timt.component';

@NgModule({
  declarations: [
    AppComponent,
    JyotiComponent,
    TIMTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
