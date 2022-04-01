import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';
import { JobsPage } from './ui/pages/jobs/jobs.page';
import { KitDigitalPage } from './ui/pages/kit-digital/kit-digital.page';
import { PageNotFoundPage } from './ui/pages/page-not-found/page-not-found.component';
import { SuccessCasesPage } from './ui/pages/success-cases/success-cases.page';
import { WhatWeDoPage } from './ui/pages/what-we-do/what-we-do.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'jobs',
    component: JobsPage
  },
  {
    path: 'what-we-do',
    component: WhatWeDoPage
  },
  {
    path: 'kit-digital',
    component: KitDigitalPage
  },
  {
    path: 'success-cases',
    component: SuccessCasesPage
  },
  {
    path: '**',
    component: PageNotFoundPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
