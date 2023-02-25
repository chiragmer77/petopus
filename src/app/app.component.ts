import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from './services/location.service';
declare var $: any;

interface AddressComponents {
  long_name: string;
  short_name: string;
  types: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'petopus-angular';

  constructor(
    private locService: LocationService,
    public translate: TranslateService
  ) { }

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
