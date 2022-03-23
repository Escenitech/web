import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';
import { PageNotFoundPage } from './ui/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
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
