import { Component, OnInit } from '@angular/core';

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
    { link: 'contact', label: 'app.menu.contact' },
  ];
  navigationSideMenu = [
    ...this.navigation
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
