import { provideRouter, RouterConfig } from '@angular/router';
import {AllFunPlacesComponent} from './all-fun-places/all-fun-places.component';
import {FunPlaceDetailComponent} from './all-fun-places/fun-place-detail/fun-place-detail.component';

export const routes: RouterConfig = [
  { path: 'all', component: AllFunPlacesComponent },
    { path: 'place/:id', component: FunPlaceDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];