import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {FunPlaceRepoService} from './app/shared/fun-place-repo.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [FunPlaceRepoService]);

