import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.addLangs(['UK', 'UR']);
    this.translate.setDefaultLang('UK');
    const browserLang: any = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/UK|UR/) ? browserLang : 'UK');

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
}
