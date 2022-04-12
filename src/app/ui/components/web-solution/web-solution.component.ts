import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

@Component({
  selector: 'app-web-solution',
  templateUrl: './web-solution.component.html',
  styleUrls: ['./web-solution.component.scss']
})
export class WebSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', animate, true);
  }

}
