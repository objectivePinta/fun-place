import { Component, OnInit } from '@angular/core';
import {FunPlaceRepoService} from '../shared/fun-place-repo.service';
import {FunPlace} from '../shared/fun-place';
import { Router } from '@angular/router';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import {StarsComponent} from './stars/stars.component';
@Component({
  moduleId: module.id,
  selector: 'app-all-fun-places',
  templateUrl: 'all-fun-places.component.html',
  styleUrls: ['../app.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES,StarsComponent]

})
export class AllFunPlacesComponent implements OnInit {
  selected: string;
  constructor(private _repo: FunPlaceRepoService, private router: Router) { }

  ngOnInit() {
  }
  clickedMarker(name: string, index: number) {
    this.selected = name;
  }
  onSelect(fplace:FunPlace) {
    this.router.navigate(['/place', fplace.id]);
  }
}
