import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProposalService {
  private apiUrl = 'http://localhost:5003/api/proposals';

  constructor(private http: HttpClient) {}

  getEntrepriseProposals(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(this.apiUrl, { headers });
  }

  updateStatus(id: string, status: string) {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.patch(`http://localhost:5003/api/proposals/${id}/status`, { status }, { headers });
  }

}
