import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.page.html',
  styleUrls: ['./what-we-do.page.scss']
})
export class WhatWeDoPage implements OnInit {

  backEndImgs = [
    {
      img: 'assets/tech/php.png',
      caption: 'PHP'
    },
    {
      img: 'assets/tech/symfony.png',
      caption: 'Symfony'
    }
  ];

  frontEndImgs = [
    {
      img: 'assets/tech/react.png',
      caption: 'React'
    },
    {
      img: 'assets/tech/Angular.png',
      caption: 'Angular'
    },
    {
      img: 'assets/tech/js.png',
      caption: 'JavaScript'
    },
    {
      img: 'assets/tech/html5.png',
      caption: 'HTML5'
    }
  ];

  mobileImgs = [
    {
      img: 'assets/tech/react.png',
      caption: 'React Native'
    },
    {
      img: 'assets/tech/ionic.png',
      caption: 'Ionic'
    }
  ];

  cloudImgs = [
    {
      img: 'assets/tech/aws.png',
      caption: 'AWS'
    },
    {
      img: 'assets/tech/googleCloud.png',
      caption: 'Google Cloud'
    },
    {
      img: 'assets/tech/firestore.png',
      caption: 'Firestore'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
