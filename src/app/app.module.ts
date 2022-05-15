import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationServerComponent } from './string-interpolation-server/string-interpolation-server.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
