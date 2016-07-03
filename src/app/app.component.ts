import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// import {AllFunPlacesComponent} from './all-fun-places/all-fun-places.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
