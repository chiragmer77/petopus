import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
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
