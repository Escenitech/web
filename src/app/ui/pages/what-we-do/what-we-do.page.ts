import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.page.html',
  styleUrls: ['./what-we-do.page.scss']
})
export class WhatWeDoPage implements OnInit {

  backEndImgs: string[] = [
    'assets/tech/php.png',
    'assets/tech/symfony.png'
  ];

  frontEndImgs: string[] = [
    'assets/tech/react.png',
    'assets/tech/Angular.png',
    'assets/tech/js.png',
    'assets/tech/html5.png'
  ];

  mobileImgs: string[] = [
    'assets/tech/react.png',
    'assets/tech/ionic.png'
  ];

  cloudImgs: string[] = [
    'assets/tech/aws.png',
    'assets/tech/googleCloud.png',
    'assets/tech/firestore.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
