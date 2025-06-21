import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Investment {
  project: string;
  type: string;
  amount: number;
  date: string;
  return: string;
  status: 'Actif' | 'En attente' | 'Clôturé';
}

export interface DashboardStats {
  balance: number;
  total: number;
  averageReturn: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = 'http://localhost:5002/api/investments';

  constructor(private http: HttpClient) {}

  getUserInvestments(): Observable<Investment[]> {
    const token = localStorage.getItem('token'); // ou sessionStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Investment[]>(`${this.apiUrl}`, { headers });
  }

  getDashboardStats(): Observable<DashboardStats> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<DashboardStats>(`${this.apiUrl}/stats`, { headers });
  }
}
