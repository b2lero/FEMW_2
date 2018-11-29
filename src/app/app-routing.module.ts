import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {InstalacionesComponent} from './instalaciones/instalaciones.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
    {path: 'index', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'instalaciones', component: InstalacionesComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
