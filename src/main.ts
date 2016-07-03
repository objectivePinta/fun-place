import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode,provide } from '@angular/core';
import { AppComponent, environment } from './app/';
import {FunPlaceRepoService} from './app/shared/fun-place-repo.service';
import {GOOGLE_MAPS_PROVIDERS,LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [FunPlaceRepoService,APP_ROUTER_PROVIDERS,GOOGLE_MAPS_PROVIDERS,
 provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyA0aqF0-BK70xY5_eXiuEX5OjpfOkWm5b0';
    return config;
  }})
])
