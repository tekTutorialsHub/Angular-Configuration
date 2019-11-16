import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us.component';
import { ContactUsComponent } from './contact-us.component';
import { HomeComponent} from './home.component';
import { AppConfigService } from './app-config.service';
import { HttpClientModule } from '@angular/common/http';


export function initializeApp(appConfigService: AppConfigService) {
  return (): Promise<any> => { 
    return appConfigService.load();
  }
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
    AppConfigService,
    { provide: APP_INITIALIZER,useFactory: initializeApp, deps: [AppConfigService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

