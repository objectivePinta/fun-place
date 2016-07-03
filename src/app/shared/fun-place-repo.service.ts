import { Injectable } from '@angular/core';
import {FunPlace} from "./fun-place";

@Injectable()
export class FunPlaceRepoService {

  constructor() {}

 public FunPlaces = [{id:1,name:"Pizza Random", address:"Strada Strazilor 2",map:{lat:45.6579755, lang:25.6011977}, rating:2},
    {id:2,name:"Pizza Hot", address:"Strada Prahovei 12",map:{lat:45.657972, lang:25.6076183}, rating:1.5},
    {id:3,name:"Pizza Hut", address:"Strada Tractorul 10",map:{lat:45.6727103, lang:25.6152275}, rating:3.3},
    {id:4,name:"Pizza Napoli", address:"Strada Uranus 5",map:{lat:45.6417654, lang:25.627382}, rating:0.9}];

    getPlaceById(index:number){
      return this.FunPlaces[index];
    }
}


//  return heroesPromise
 //     .then(heroes => heroes.filter(h => h.id === +id)[0]);