import { Injectable } from '@angular/core';
import {FunPlace} from "./fun-place";

@Injectable()
export class FunPlaceRepoService {

  constructor() {}

 public FunPlaces = [{id:1,name:"Pizza Hot", address:"Strada strazilor 2",map:{lat:44.3, lang:33.2}, rating:2},
    {id:2,name:"Pizza Hot A", address:"Strada strazilor 2",map:{lat:44.7, lang:33.2}, rating:1.5},
    {id:3,name:"Pizza Hot B", address:"Strada strazilor 2",map:{lat:44.9, lang:33.2}, rating:3.3},
    {id:4,name:"Pizza Hot C", address:"Strada strazilor 2",map:{lat:46, lang:33.2}, rating:0.9}];

    getPlaceById(index:number){
      return this.FunPlaces[index];
    }
}


//  return heroesPromise
 //     .then(heroes => heroes.filter(h => h.id === +id)[0]);