import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routeAnimations } from './core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  isProd = env.production;
  envName = env.envName;
  envOwner = env.owner;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/favicon.svg');

  theme = env.themeName;

  navigation = [
    { link: 'home', label: 'app.menu.home' },
    { link: 'about', label: 'app.menu.about' },
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  }
}
