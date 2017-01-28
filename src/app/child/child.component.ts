import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() parentvar: string;
  @Output() onClicked = new EventEmitter<string>();

  msgFromParent : string;

  ngOnInit() {
    console.log(this.parentvar);
    this.exposedProp = "hello";
  }
  exposedProp: string;

  displayMessageFromParent(value){

      this.msgFromParent = value;
  }

  sendMsgToParent() {
    console.log("sending msg to parent");
    this.onClicked.emit("message from child" + new Date().toTimeString());

  }

}
