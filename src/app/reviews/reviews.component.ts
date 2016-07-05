import { Component, OnInit } from '@angular/core';
import {ReviewsRepoService} from "../shared/reviews-repo.service";
import {Review} from '../shared/review';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    constructor(private _reviewsRepo:ReviewsRepoService,private route: ActivatedRoute) {
    }

    results:Array<Review>;
    private sub:any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.results = this._reviewsRepo.getReviewsOfPlaceWithThisId(id);
        });
    }

}
