import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  id: string;
  addOne: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
      let addOne = Number(this.id) + 1;

      this.addOne = String(addOne);
    });


  }


}
