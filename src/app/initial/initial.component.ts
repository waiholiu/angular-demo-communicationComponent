import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  @ViewChild(ChildComponent)
    private childComponent: ChildComponent;

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
    this.childComponent.displayMessageFromParent("hello2");

  }

}
