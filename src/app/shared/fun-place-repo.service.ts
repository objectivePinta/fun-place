import { Injectable } from '@angular/core';
import {FunPlace} from "./fun-place";

@Injectable()
export class FunPlaceRepoService {

  constructor() {}

 public FunPlaces = [{id:1,name:"Pizza Random", address:"Strada Strazilor 2",map:{lat:45.6579755, lang:25.6011977}, rating:2},
    {id:2,name:"Pizza Hot", address:"Strada Prahovei 12",map:{lat:45.657972, lang:25.6076183}, rating:1.5},
    {id:3,name:"Pizza Hut", address:"Strada Tractorul 10",map:{lat:45.6727103, lang:25.6152275}, rating:3.3},
    {id:4,name:"Pizza Napoli", address:"Strada Uranus 5",map:{lat:45.6417654, lang:25.627382}, rating:0.9},
     {id:5,name:"Pizza Random", address:"Strada Strazilor 2",map:{lat:45.6979755, lang:25.6011977}, rating:2},
     {id:6,name:"Pizza Hot", address:"Strada Prahovei 12",map:{lat:45.757972, lang:25.6076183}, rating:3.4},
     {id:7,name:"Pizza Hut", address:"Strada Tractorul 10",map:{lat:45.727103, lang:25.6152275}, rating:3.5},
     {id:8,name:"Pizza Napoli", address:"Strada Uranus 5",map:{lat:45.6617654, lang:25.627382}, rating:3.6},
     {id:9,name:"Pizza Random", address:"Strada Strazilor 2",map:{lat:45.6879755, lang:25.6011977}, rating:3.7},
     {id:10,name:"Pizza Hot", address:"Strada Prahovei 12",map:{lat:45.557972, lang:25.6076183}, rating:3.9},
     {id:11,name:"Pizza Hut", address:"Strada Tractorul 10",map:{lat:45.22727103, lang:25.6152275}, rating:4},
     {id:12,name:"Pizza Napoli", address:"Strada Uranus 5",map:{lat:45.2117654, lang:25.627382}, rating:4.1},
     {id:13,name:"Pizza Random", address:"Strada Strazilor 2",map:{lat:45.20079755, lang:25.6011977}, rating:2.1},
     {id:14,name:"Pizza Hot", address:"Strada Prahovei 12",map:{lat:45.800972, lang:25.6076183}, rating:0},
     {id:15,name:"Pizza Hut", address:"Strada Tractorul 10",map:{lat:45.9727103, lang:25.6152275}, rating:0.5},
     {id:16,name:"Pizza Napoli", address:"Strada Uranus 5",map:{lat:45.2417654, lang:25.627382}, rating:5},
     {id:17,name:"Pizza Random", address:"Strada Strazilor 2",map:{lat:45.1579755, lang:25.6011977}, rating:5},
     {id:18,name:"Pizza Hot", address:"Strada Prahovei 12",map:{lat:45.357972, lang:25.6076183}, rating:5},
     {id:19,name:"Pizza Hut", address:"Strada Tractorul 10",map:{lat:45.2727103, lang:25.6152275}, rating:5},
     {id:20,name:"Pizza Napoli", address:"Strada Uranus 5",map:{lat:45.1417654, lang:25.627382}, rating:5}


 ];

    getPlaceById(index:number){
      return this.FunPlaces[index];
    }
}


//  return heroesPromise
 //     .then(heroes => heroes.filter(h => h.id === +id)[0]);