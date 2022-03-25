import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isProd = env.production;
  envName = env.envName;
  envOwner = env.owner;
  version = env.versions.app;
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
