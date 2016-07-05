import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';
import {FunPlaceRepoService} from '../../shared/fun-place-repo.service';
import {FunPlace} from '../../shared/fun-place.ts';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import {StarsComponent} from '../stars/stars.component';
@Component({
    moduleId: module.id,
    selector: 'app-fun-place-detail',
    templateUrl: 'fun-place-detail.component.html',
    styleUrls: ['../../app.component.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES, StarsComponent]

})
export class FunPlaceDetailComponent implements OnInit {
    fplace:FunPlace;

    constructor(private route:ActivatedRoute, private router:Router, private _repo:FunPlaceRepoService) {
    }

    private sub:any;
    private id:number;
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            this.fplace = this._repo.getPlaceById(this.id - 1);
        });
        console.log(this.sub);
    }

    goBack() {
        this.router.navigate(['/all']);
    }

    showReviews() {
        this.router.navigate(['/place/:'+this.id+'/reviews']);
    }
}
 