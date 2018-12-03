import { NgModule } from '@angular/core';

import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, LegalComponent]
})
export class StaticModule {}