import {FunPlace} from "./fun-place";
export interface Review {
  id:number;
  content: string;
  rating: number;
  place:FunPlace;
  date:Date;
}

