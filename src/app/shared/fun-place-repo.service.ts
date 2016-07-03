import { Injectable } from '@angular/core';
import {FunPlace} from "./fun-place";

@Injectable()
export class FunPlaceRepoService {

  constructor() {}

 public FunPlaces = [{id:1,name:"Pizza Hot", address:"Strada strazilor 2",map:{lat:44.3, long:33.2}, rating:9},
    {id:2,name:"Pizza Hot", address:"Strada strazilor 2",map:{lat:44.3, long:33.2}, rating:9},
    {id:3,name:"Pizza Hot", address:"Strada strazilor 2",map:{lat:44.3, long:33.2}, rating:9},
    {id:4,name:"Pizza Hot", address:"Strada strazilor 2",map:{lat:44.3, long:33.2}, rating:9}];




}
