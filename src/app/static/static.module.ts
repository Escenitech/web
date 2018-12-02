import { NgModule } from '@angular/core';

import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent]
})
export class StaticModule {}