import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  oldProcessesImg: string = 'assets/icon-oldProcesses.png';
  newProcessesImg: string = 'assets/icon-newProcesses.png';
  arrowRightImg: string = 'assets/arrow-right.png';
  checkImg: string = 'assets/check.png';

  advantagesList = [
    'app.what-we-do.page.point1.advantages',
    'app.what-we-do.page.point2.advantages',
    'app.what-we-do.page.point3.advantages',
    'app.what-we-do.page.point4.advantages',
    'app.what-we-do.page.point5.advantages'
  ];

  constructor() { }

  ngOnInit() {
  }

}
