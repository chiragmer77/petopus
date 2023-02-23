import { Component, OnInit } from '@angular/core';
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

    this.getCurrentLocation();
  }

  /** Get current location */
  getCurrentLocation = () => {
    this.locService.get().subscribe((res: { add: { components: AddressComponents[], formatted_address: string }; position_latitude: number; position_longitude: number; }) => {
      console.log("res>>>>>>>>>>", res);

      let address: any = res.add

      var loc = this.getCountry(address);
      console.log(loc)
    });
  }

  getCountry(results: any) {
    console.log(results)
    for (var i = 0; i < results.components.length; i++) {
      var shortname = results.components[i].short_name;
      var longname = results.components[i].long_name;
      var type = results.components[i].types;
      if (type.indexOf("country") != -1) {
        if (!this.isNullOrWhitespace(shortname)) {
          return shortname;
        }
        else {
          return longname;
        }
      }
    }


  }

  isNullOrWhitespace(text: any) {
    if (text == null) {
      return true;
    }
    return text.replace(/\s/gi, '').length < 1;
  }
}
