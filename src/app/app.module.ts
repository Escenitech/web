import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core';
import {SharedModule} from './shared/shared.module';
import {HomeComponent, PageNotFoundComponent, StaticModule} from './static';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
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
export class AppModule {
}
