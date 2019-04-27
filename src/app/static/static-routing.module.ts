import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { JobsComponent } from  './jobs/jobs.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'app.menu.about' }
  },
  {
    path: 'legal',
    component: LegalComponent,
    data: { title: 'app.menufooter.legal' }
  },
  {
    path: 'jobs',
    component: JobsComponent,
    data: { title: 'app.jobs' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
