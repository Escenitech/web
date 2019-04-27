import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './static';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'app.title' }
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // useHash: true,
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
