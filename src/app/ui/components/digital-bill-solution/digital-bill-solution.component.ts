import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

@Component({
  selector: 'app-digital-bill-solution',
  templateUrl: './digital-bill-solution.component.html',
  styleUrls: ['./digital-bill-solution.component.scss']
})
export class DigitalBillSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', animate, true);
  }

}
