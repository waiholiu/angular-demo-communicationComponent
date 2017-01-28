import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor() { }

  isDisabled: boolean = true;
  btnIconName: string = "add";

  childInput: string = "var1";
  msgFromChild: string = "nothing";

  toggleDisable() {

    this.isDisabled = !this.isDisabled;
    if (this.btnIconName == "add") {
      this.btnIconName = "remove circle";
    }
    else {
      this.btnIconName = "add";
    }
  }

  ngOnInit() {
  }

  onChildClicked(value) {
    this.msgFromChild = value;

  }

}
