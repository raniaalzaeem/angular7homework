import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AboutComponent} from './about/about.component';
import{ ContactUSComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'about',component: AboutComponent},
  {path:'contactus',component: ContactUSComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
