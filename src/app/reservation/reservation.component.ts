import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../shared/services/reservation.service';
import {MakeReservation} from '../shared/models/MakeReservation';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

    private thetoken;
    private checkDateAvailabilities;
    private mydates;
    private Alldates;
    private errorRsv: boolean;
    private errorData: boolean;
    private successRsv: boolean;

    constructor(private reservationService: ReservationService, private router: Router) {
    }

    ngOnInit() {
        this.thetoken = sessionStorage.getItem('token') || null;
        this.checkReservations();
    }


    checkReservations() {
        return this.reservationService.getReservations(this.thetoken).subscribe(
            data => {
                this.mydates = data;
            });
    }

    checkAllreservation() {
        const dateNow = new Date(this.checkDateAvailabilities).getTime();
        return this.reservationService.getAllReservationByDate(this.thetoken, dateNow).subscribe(
            data => {
                console.log(data);
                this.Alldates = data;
            }
        );
    }

    makeReservation(time: string, courtId: number) {

        const selectedCourt = courtId;
        const selectedtime = (new Date(this.checkDateAvailabilities + ' ' + time).getTime());
        const reservation: MakeReservation =  {courtid: selectedCourt, rsvdatetime: selectedtime};

        return this.reservationService.postReservation(
            selectedCourt,
            selectedtime,
            this.thetoken,
            reservation).subscribe(
            data => {
                console.log('respuesta ok');
            },
            error => {
                if (error.status === 409) {
                    this.errorRsv = true;
                }
                if (error.status === 400) {
                    this.errorData = true;
                }
            },
            () => {
                console.log('Reservation made');
                this.successRsv = true;
                setTimeout(() => {
                    this.successRsv = false;
                }, 2000);
                this.checkReservations();
                window.location.reload();
            }
        );
    }

    deleteReservation(rsvid) {
        return this.reservationService.deleteReservation(
            this.thetoken,
            rsvid).subscribe(
            res => {
                console.log('response ok');
            },
            error => {
                console.log(error);
            },
            () => {
                console.log('reservation deleted');
                this.checkReservations();
            }
        );
    }
}
