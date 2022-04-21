import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

@Component({
  selector: 'app-success-cases',
  templateUrl: './success-cases.page.html',
  styleUrls: ['./success-cases.page.scss']
})
export class SuccessCasesPage implements OnInit {
  deliveryNoteImgs: string[] = [
    '../../../../assets/success-cases/delivery-note-1.png',
    '../../../../assets/success-cases/delivery-note-2.png',
    '../../../../assets/success-cases/delivery-note-3.png',
    '../../../../assets/success-cases/delivery-note-4.png',
  ];
  clientSpaceImgs: string[] = [
    '../../../../assets/success-cases/client-space-1.png',
    '../../../../assets/success-cases/client-space-2.png',
  ];

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', animate, true);
  }

}
