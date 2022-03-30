import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kit-digital',
  templateUrl: './kit-digital.page.html',
  styleUrls: ['./kit-digital.page.scss']
})
export class KitDigitalPage implements OnInit {

  currentSolution: string = 'web';

  constructor() { }

  ngOnInit(): void {
  }

  changeSolution(newSolution: string) {
    this.currentSolution = newSolution;
  }

}
