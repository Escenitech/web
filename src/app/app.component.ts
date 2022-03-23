import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {routeAnimations} from './core';
import { environment as env } from 'src/environments/environment';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { AppTranslateService } from './infrastructure/services/app/app-translate.service';

declare var gtag: any;

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
    // logo = require('../assets/favicon.svg');
    // logoBlack = require('../assets/escenitech-black.svg');

    theme = env.themeName;

    navigation = [
        {link: 'jobs', label: 'app.menu.jobs'},
    ];
    navigationSideMenu = [
        ...this.navigation
    ];

    constructor(
        private router: Router,
        private translateService: AppTranslateService
    ) {
        this.translateService.start();
    }

    onActivate() {
        const contentContainer = document.querySelector('.mat-sidenav-content');
        if (contentContainer) {
            contentContainer.scrollTo(0, 0);
        }
        contentContainer?.scrollTo(0, 0);
    }
}
