import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from 'src/app/services/location.service';
declare var $: any;

interface AddressComponents {
  long_name: string;
  short_name: string;
  types: string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  language: any = {};

  constructor(
    public translate: TranslateService,
    private locService: LocationService,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.translate.addLangs(['UK', 'UR', 'ITA', 'ESP', 'PT', 'DE', 'JPN', 'KR', 'CN', 'RU', 'AE', 'PH']);
    this.translate.setDefaultLang('UK');
    const browserLang: any = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/UK|UR/) ? browserLang : 'UK');
    this.language.defualtLanguage = 'EN'
    console.log(this.translate.currentLang);

    setTimeout(() => {
      this.getCurrentLocation();

    }, 500);


    $(document).ready(function () {
      $('#openbtn').click(function () {
        $('body').toggleClass('sidemenu');
        $('#openbtn .fa').toggleClass('fa-bars').toggleClass('fa-close');
      });
    });
  }

  dropDown() {
    $('#myDropdown').toggleClass('show');
  }

  /** Close side menu */
  closeSideMenu() {
    $('body').toggleClass('sidemenu');
    $('#openbtn .fa').toggleClass('fa-bars').toggleClass('fa-close');
  }

  /** Change language */
  changeLanguage(lang: any) {
    if (lang == 'UR') {
      this.language.defualtLanguage = 'FR';
    } else if (lang == 'EN') {
      this.language.defualtLanguage = 'EN';
    } else {
      this.language.defualtLanguage = lang;
    }
    console.log(lang)
  }

  /** Get current location */
  getCurrentLocation = () => {
    this.locService.get().subscribe((res: { add: { components: AddressComponents[], formatted_address: string }; position_latitude: number; position_longitude: number; }) => {
      let address: any = res.add
      var loc = this.getCountry(address);
      console.log("loc", loc)

      /** French */

      if (loc == 'FR') {
        this.language.defualtLanguage = 'FR';
        this.translate.use('UR');

        /** Italian */
      } else if (loc == 'IT') {
        this.language.defualtLanguage = 'ITA';
        this.translate.use('ITA');
      }

      /** Spanish */
      else if (loc == 'ES') {
        this.language.defualtLanguage = 'ESP';
        this.translate.use('ESP');
      }

      /** Portuguese */
      else if (loc == 'PT') {
        this.language.defualtLanguage = 'PT';
        this.translate.use('PT');
      }

      /** German */
      else if (loc == 'DE') {
        this.language.defualtLanguage = 'DE';
        this.translate.use('DE');
      }

      /** Japanese */
      else if (loc == 'JP') {
        this.language.defualtLanguage = 'JPN';
        this.translate.use('JPN');
      }

      /** Korean */
      else if (loc == 'KR') {
        this.language.defualtLanguage = 'KR';
        this.translate.use('KR');
      }

      /** Chinese */
      else if (loc == 'CN') {
        this.language.defualtLanguage = 'CN';
        this.translate.use('CN');
      }

      /** Russian */
      else if (loc == 'RU') {
        this.language.defualtLanguage = 'RU';
        this.translate.use('RU');
      }

      /** Arabic */
      else if (loc == 'AE') {
        this.language.defualtLanguage = 'AE';
        this.translate.use('AE');
      }

      /** Philippines */
      else if (loc == 'PH') {
        this.language.defualtLanguage = 'PH';
        this.translate.use('PH');
      }
      this.cd.markForCheck();
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
