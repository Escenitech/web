import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared/shared.module';
import { StaticModule, HomeComponent, PageNotFoundComponent } from './static';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    //Angular
    BrowserAnimationsModule,
    BrowserModule,
    //Core & Share
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
