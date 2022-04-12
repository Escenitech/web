import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

@Component({
  selector: 'app-processes-solution',
  templateUrl: './processes-solution.component.html',
  styleUrls: ['./processes-solution.component.scss']
})
export class ProcessesSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', animate, true);
  }

}
