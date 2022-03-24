import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';
import { JobsPage } from './ui/pages/jobs/jobs.page';
import { PageNotFoundPage } from './ui/pages/page-not-found/page-not-found.component';
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
