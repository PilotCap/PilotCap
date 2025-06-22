import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private baseUrl = 'http://localhost:5004/api/opportunities';  // ← Your backend port

  constructor(private http: HttpClient) {}

  createOpportunity(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getOpportunitiesByEntreprise(): Observable<any> {
    return this.http.get(`${this.baseUrl}/entreprise`);
  }

  getAllOpportunities(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
