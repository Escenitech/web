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

    theme = env.themeName;

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
