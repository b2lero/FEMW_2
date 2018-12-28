import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {ServiciosComponent} from './servicios/servicios.component';
import {ModalComponent} from './nav/modal/modal.component';
import {UserService} from './shared/services/user.service';
import {InstalacionesComponent} from './instalaciones/instalaciones.component';
import {RegisterComponent} from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ServiciosComponent,
        ModalComponent,
        InstalacionesComponent,
        RegisterComponent,
        ReservationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
