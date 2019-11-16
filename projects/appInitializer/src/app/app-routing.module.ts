import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './contact-us.component';


const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "contactus", component:ContactUsComponent},
  {path: "aboutus", component:AboutUsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
