import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

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
    'app.home.point1.advantages',
    'app.home.point2.advantages',
    'app.home.point3.advantages',
    'app.home.point4.advantages',
    'app.home.point5.advantages'
  ];

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', animate, true);
  }
}
