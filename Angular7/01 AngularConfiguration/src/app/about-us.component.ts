import { Component } from '@angular/core';
import { AppConfigService} from './app-config.service';


@Component({
    template: `About Us`,
})
export class AboutUsComponent
{
    protected apiServer = AppConfigService.settings.apiServer;

    constructor() {
        console.log(this.apiServer.link1);
        console.log(this.apiServer.link2);
    }
}