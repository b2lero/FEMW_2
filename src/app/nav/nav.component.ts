import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

  private mymodal: any;

  constructor() { }

  ngOnInit() {
    this.mymodal = $('#modal-login');
  }

  showmodal() {
    this.mymodal.modal();
  }

  hidemodal(hide: string) {
    this.mymodal.modal(hide);
  }
}
