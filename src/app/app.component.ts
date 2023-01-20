import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'petopus-angular';

  constructor() { }

  ngOnInit(): void {
    // for scrolling
    ($(window) as any).scroll(() => {
      const windowTop = $(window).scrollTop() + 1;
      if (windowTop > 50) {
        $('.main_menu').addClass('sticky');
      } else {
        $('.main_menu').removeClass('sticky');
      }
    });
  }
}
