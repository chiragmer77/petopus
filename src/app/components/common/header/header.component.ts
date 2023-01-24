import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  language: any = {};

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.addLangs(['UK', 'UR']);
    this.translate.setDefaultLang('UK');
    const browserLang: any = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/UK|UR/) ? browserLang : 'UK');
    this.language.defualtLanguage = 'EN (English)'
    console.log(this.translate.currentLang)

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
      this.language.defualtLanguage = 'FR (French)';
    } else {
      this.language.defualtLanguage = 'EN (English)';
    }
    console.log(lang)
  }
}
