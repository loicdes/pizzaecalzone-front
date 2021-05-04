import { Injectable } from '@angular/core';
import { Http } from './http.service';
import { Observable } from 'rxjs';
import { DashboardData } from '../models/dashboardData';
import { Commande } from '../models/commande';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: Http) { }
    
    getDashboardData(): Observable<DashboardData> {
        return this.http.get('/dashboard');
    }
    creerCommande(commande: Commande): Observable<any> {
        return this.http.post(commande, '/commande');
    }
    getCommandes(): Observable<Commande[]> {
        return this.http.get('/commandes');
    }
}
