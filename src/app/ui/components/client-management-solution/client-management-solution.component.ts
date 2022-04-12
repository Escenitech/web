import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

@Component({
  selector: 'app-client-management-solution',
  templateUrl: './client-management-solution.component.html',
  styleUrls: ['./client-management-solution.component.scss']
})
export class ClientManagementSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', animate, true);
  }

}
