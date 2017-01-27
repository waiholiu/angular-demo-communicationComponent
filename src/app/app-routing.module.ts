import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitialComponent} from './initial/initial.component'
import {DestinationComponent} from './destination/destination.component'

const routes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'dest/:id', component: DestinationComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
