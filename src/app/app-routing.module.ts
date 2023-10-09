import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavBarComponent},
  {path: 'About', component: AboutComponent},
{path:'Services', component: ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
