import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output()
  toHide = new EventEmitter<string>();

  private usrname;
  private pswd;
  private visible: string;
  private mytoki;

  constructor(private loginservice: LoginService) { }

  ngOnInit() {
  }

  connect(usrname, pswd) {
    this.loginservice.getUserLogin(this.usrname, this.pswd).subscribe(
      (res) => {
        console.log(res); // TODO
      }, err => {
        console.log(err);
      }, () => {
          this.visible = 'hide';
          this.toHide.next(this.visible);
      }
    );
  }
}
