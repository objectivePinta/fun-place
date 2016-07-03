import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';
import {FunPlaceRepoService} from '../../shared/fun-place-repo.service';
import {FunPlace} from '../../shared/fun-place.ts';
@Component({
  moduleId: module.id,
  selector: 'app-fun-place-detail',
  templateUrl: 'fun-place-detail.component.html',
  styleUrls: ['../../app.component.css']
})
export class FunPlaceDetailComponent implements OnInit {
fplace:FunPlace;
  constructor(private route: ActivatedRoute,private router: Router,  private _repo: FunPlaceRepoService) { }
 private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
      this.fplace =  this._repo.getPlaceById(id-1);
     });
  }

  goBack() {
    this.router.navigate(['/all']);
  }
}
 