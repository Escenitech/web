import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core';
import {SharedModule} from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePage } from './ui/pages/home/home.page';
import { JobsPage } from './ui/pages/jobs/jobs.page';
import { WhatWeDoPage } from './ui/pages/what-we-do/what-we-do.page';
import { HeaderComponent } from './ui/components/header/header.component';
import { FooterComponent } from './ui/components/footer/footer.component';
import { KitDigitalPage } from './ui/pages/kit-digital/kit-digital.page';
import { WebSolutionComponent } from './ui/components/web-solution/web-solution.component';
import { ProcessesSolutionComponent } from './ui/components/processes-solution/processes-solution.component';
import { DigitalBillSolutionComponent } from './ui/components/digital-bill-solution/digital-bill-solution.component';
import { ClientManagementSolutionComponent } from './ui/components/client-management-solution/client-management-solution.component';

export const createTranslateLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    JobsPage,
    WhatWeDoPage,
    HeaderComponent,
    FooterComponent,
    KitDigitalPage,
    WebSolutionComponent,
    ProcessesSolutionComponent,
    DigitalBillSolutionComponent,
    ClientManagementSolutionComponent
    // PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MomentModule,
    FontAwesomeModule,
    // features
    // StaticModule,
    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
