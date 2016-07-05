import { Component, OnInit } from '@angular/core';
import {ReviewsRepoService} from "../shared/reviews-repo.service";
import {Review} from '../shared/review';
import { Router, ActivatedRoute }  from '@angular/router';
import {FunPlace} from "../shared/fun-place";
import {StarsComponent} from "../all-fun-places/stars/stars.component";
import {FunPlaceRepoService} from "../shared/fun-place-repo.service";

@Component({
    moduleId: module.id,
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css'],
  directives:[StarsComponent]
})
export class ReviewsComponent implements OnInit {

    constructor(private router:Router,private _repo:FunPlaceRepoService, private _reviewsRepo:ReviewsRepoService,private route: ActivatedRoute) {
    }

    results:Array<Review>;
    funPlace:FunPlace;
    private sub:any;
    id:number;
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
             console.log(this.id);
            this.results = this._reviewsRepo.getReviewsOfPlaceWithThisId(this.id);
            this.funPlace = this._repo.getPlaceById(this.id-1);
        });
    }

  goBack() {
    this.router.navigate(['/place/:'+this.id]);
  }

  goToAll()
  {
    this.router.navigate(['/all']);
  }
}
