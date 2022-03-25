import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/favicon.svg';
  logoBlack = 'assets/escenitech-black.svg';

  navigation = [
    { link: 'what-we-do', label: 'app.menu.what-do-we-do' },
    { link: 'success-cases', label: 'app.menu.success-cases' },
    { link: 'digital-kit', label: 'app.menu.digital-kit' },
  ];
  navigationSideMenu = [
    ...this.navigation
  ];

  languages = environment.languages;

  constructor() { }

  ngOnInit(): void {
  }

}
