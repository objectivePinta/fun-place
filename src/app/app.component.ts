import { Component } from '@angular/core';
import {AllFunPlacesComponent} from './all-fun-places/all-fun-places.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[AllFunPlacesComponent]
})
export class AppComponent {
  title = 'app works!';
}
