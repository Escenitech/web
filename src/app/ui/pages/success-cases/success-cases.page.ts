import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { animate } from 'src/app/shared/animate-on-scroll';

@Component({
  selector: 'app-success-cases',
  templateUrl: './success-cases.page.html',
  styleUrls: [
    './success-cases.page.scss',
    '../../../../theme/w3.css'
  ],
  encapsulation: ViewEncapsulation.None
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

  slideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', animate, true);
  }

  ngAfterViewInit() {
    this.showDivs();
  }

  public plusDivs(n: number) {
    this.showDivs(this.slideIndex + n);
  }

  showDivs(next: number | undefined = undefined) {
    let imgs = document.getElementsByClassName('dn-img');

    if (next) {
      if (next >= imgs.length) {
        next = 0;
      }

      if (next < 0) {
        next = imgs.length - 1;
      }

      imgs[this.slideIndex].classList.add('hide-img');
      imgs[next].classList.remove('hide-img');

      this.slideIndex = next;
    }

    else {
      imgs[this.slideIndex].classList.remove('hide-img');
    }

  }

}
