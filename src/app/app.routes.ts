import { provideRouter, RouterConfig } from '@angular/router';
import {AllFunPlacesComponent} from './all-fun-places/all-fun-places.component';
import {FunPlaceDetailComponent} from './all-fun-places/fun-place-detail/fun-place-detail.component';
import {ReviewsComponent} from "./reviews/reviews.component";

export const routes: RouterConfig = [
  {path:'',redirectTo:'/all',terminal:true},
  { path: 'all', component: AllFunPlacesComponent  },
    { path: 'place/:id', component: FunPlaceDetailComponent },
  { path: 'place/:id/reviews', component: ReviewsComponent}

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
