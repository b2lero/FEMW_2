import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';


const routes: Routes = [
  { path: 'index', component: HomeComponent},
  { path: 'servicios', component: ServicesComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
