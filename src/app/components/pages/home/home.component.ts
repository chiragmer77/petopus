import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

declare function swiperInit(): void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannerSliderOptions: OwlOptions = {
    margin: 15,
    loop: true,
    autoplay: false,
    autoplayHoverPause: false,
    mouseDrag: true,
    dots: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    items: 1,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },

      576: {
        items: 1,
      },
      767: {
        items: 1,
      },
    },
  };

  ourPartnerSliderOptions: OwlOptions = {
    margin: 60,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    mouseDrag: true,
    dots: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    nav: false,
    responsive: {
      0: {
        items: 3,
        margin: 50,
      },

      576: {
        items: 4,
        margin: 60,
      },
      767: {
        items: 4,
        margin: 60,
      },
    },
  };

  memberSliderOptions: OwlOptions = {
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    mouseDrag: true,
    dots: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    items: 1,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  };

  swiperSliderOptions: OwlOptions = {
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    mouseDrag: true,
    dots: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    items: 1,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  };

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    swiperInit();
  }

  slides = [
    { img: 'https://picsum.photos/200' },
    { img: 'https://picsum.photos/300' },
    { img: 'https://picsum.photos/400' },
    { img: 'https://picsum.photos/600' },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
