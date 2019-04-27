import { NgModule } from '@angular/core';

import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, LegalComponent, JobsComponent]
})
export class StaticModule {}
