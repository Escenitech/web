import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';
import {tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AppTranslateService {

    private currentLang: string = 'es';

    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(environment.languages);
    }

    public start(): void {
        this.changeLang(this.osLanguage());
    }

    public osLanguage(): string {
        const browserLang: string = 'es';
        // const browserLang: string = this.translateService.getBrowserLang() || 'es';
        const indexOfLang: number = environment.languages.indexOf(browserLang);
        return indexOfLang !== -1 ? environment.languages[indexOfLang] : environment.defaultLanguage;
    }

    trans(text: string, params: Object|null = null, defaultText: string|null = null): string | any {
        if (!text) {
            return '';
        }
        const transText = this.translateService.instant(text || 'undefined', params || undefined);
        return (!!defaultText && transText === text) ?
            this.translateService.instant(defaultText || 'undefined', params || undefined) :
            transText;
    }

    public getCurrentLang(): string {
        return this.translateService.currentLang;
    }

    transLang(text: string, params: {}|null = null, lang: string|null = null): string | any {
        if (!lang) {
            return this.trans(text, params);
        }
        this.currentLang = this.translateService.currentLang;
        this.translateService.currentLang = lang;
        const trans = this.trans(text, params);
        this.translateService.currentLang = this.currentLang;
        return trans;
    }

    changeLang(lang: string) {
        return this.translateService.use(lang).pipe(
            tap(() => moment.locale(lang))
        );
    }

    public onChangeLang() {
        return this.translateService.onLangChange;
    }
}
