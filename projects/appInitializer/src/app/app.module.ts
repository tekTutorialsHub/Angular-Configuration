import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us.component';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './contact-us.component';

import { AppInitService } from './app-init.service';


export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}

export function initializeApp2() {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp2 called`);
      setTimeout(() => {
        console.log(`initializeApp2 Finished`);
        resolve();
      }, 2000);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent, AboutUsComponent,HomeComponent,ContactUsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ 
    AppInitService,
    { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [AppInitService], multi: true},
    { provide: APP_INITIALIZER,useFactory: initializeApp2, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

