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

  ngOnInit() {
    console.log(this.parentvar);
  }

  sendMsgToParent() {
    console.log("sending msg to parent");
    this.onClicked.emit("message from child" + new Date().toTimeString());

  }

}
