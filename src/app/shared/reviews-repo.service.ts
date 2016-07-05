import { Injectable } from '@angular/core';
import {Review} from "./review";

@Injectable()
export class ReviewsRepoService {

    REVIEWS = [{id: 1, idOfPlace: 1, content: "It's ok", rating: 1, date: new Date('1968-11-16T00:00:00')},
        {id: 2, idOfPlace: 1, content: "It's quite ok", rating: 2, date: new Date('1968-11-16T00:00:00')},
        {id: 3, idOfPlace: 1, content: "It's fantastic", rating: 3, date: new Date('1968-11-16T00:00:00')},
        {id: 4, idOfPlace: 1, content: "It's otherworldly", rating: 4, date: new Date('1968-11-16T00:00:00')},
        {id: 5, idOfPlace: 1, content: "It's ok", rating: 5, date: new Date('1968-11-16T00:00:00')}]

    constructor() {
    }

    getReviewsOfPlaceWithThisId(id:number):Array<Review> {
    var results = new Array<Review>();
        for (let item of this.REVIEWS) {
            if (item.idOfPlace === id) {
                results.push(item);
            }
        }
        return results;
    }
}

//
//import {FunPlace} from "./fun-place";
//export interface Review {
//  id:number;
//  idOfPlace:number;
//  content: string;
//  rating: number;
//  place:FunPlace;
//  date:Date;
//}
//
