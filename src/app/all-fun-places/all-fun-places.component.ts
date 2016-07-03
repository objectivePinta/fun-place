import { Component, OnInit } from '@angular/core';
import {FunPlaceRepoService} from '../shared/fun-place-repo.service';
@Component({
  moduleId: module.id,
  selector: 'app-all-fun-places',
  templateUrl: 'all-fun-places.component.html',
  styleUrls: ['all-fun-places.component.css']
})
export class AllFunPlacesComponent implements OnInit {

  constructor(private _repo:FunPlaceRepoService) {}

  ngOnInit() {
  }

}
