import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MakeReservation} from '../models/MakeReservation';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    private port = 1723;

    private urlReservations = `http://fenw.etsisi.upm.es:${this.port}/reservations`;
    private urlReservationsAll = `http://fenw.etsisi.upm.es:${this.port}/reservations/`;

    constructor(private http: HttpClient) {
    }

    getReservations(token: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this.http.get(this.urlReservations, {headers});
    }

    getAllReservationByDate(token: string, date: number) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this.http.get(this.urlReservationsAll + date, {headers});
    }

    postReservation(courtId: number, date: number, token: string, reservation: MakeReservation) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this.http.post(this.urlReservationsAll, reservation, {headers});
    }

    deleteReservation(token: string, rsvid: number) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this.http.delete(this.urlReservationsAll + rsvid, {headers});
    }

}
