import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgSrc = {
    header: './assets/img/img-header-1.jpg',
    card1: './assets/img/img-card-1.jpg',
    card2: './assets/img/img-card-3.jpg'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
