import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {routeAnimations} from './core';
import {environment as env} from '@env/environment';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

declare var gtag;

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
        {link: 'jobs', label: 'app.menu.jobs'},
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
        const navEndEvents$ = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            );

        navEndEvents$.subscribe((event: NavigationEnd) => {
            gtag('config', 'UA-158962167-1', {
                'page_path': event.urlAfterRedirects
            });
        });

    }

    onActivate() {
        const contentContainer = document.querySelector('.mat-sidenav-content');
        if (contentContainer) {
            contentContainer.scrollTo(0, 0);
        }
        contentContainer.scrollTo(0, 0);
    }
}
