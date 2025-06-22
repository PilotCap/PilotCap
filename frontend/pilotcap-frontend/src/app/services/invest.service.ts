import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestService {
  private API_URL = 'http://localhost:5000/api/investments';

  constructor(private http: HttpClient) {}

  invest(amount: number, entrepriseId: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.API_URL}/invest`, { amount, entrepriseId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getMyInvestments() {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.API_URL}/myinvestments`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
