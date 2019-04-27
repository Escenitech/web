import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {routeAnimations} from './core';
import {environment as env} from '@env/environment';
import {Router} from '@angular/router';

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
    logoBlack = require('../assets/escenitech-black.svg');

    theme = env.themeName;

    navigation = [
        { link: 'jobs', label: 'app.menu.jobs' },
    ];
    navigationSideMenu = [
        ...this.navigation
    ];

    constructor(
        private router: Router,
        translate: TranslateService
    ) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('es');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('es');
    }

    onActivate() {
        const contentContainer = document.querySelector('.mat-sidenav-content');
        if (contentContainer) {
            contentContainer.scrollTo(0, 0);
        }
        contentContainer.scrollTo(0, 0);
    }
}
