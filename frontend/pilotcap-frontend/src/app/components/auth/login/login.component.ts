import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.isLoading = true;

    this.http.post<any>('http://localhost:5000/api/users/login', this.credentials)
      .subscribe({
        next: (res) => {
          // ✅ Stocker les infos importantes
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.user.id);
          localStorage.setItem('role', res.user.role);

          // ✅ Redirection selon le rôle
          if (res.user.role === 'investisseur') {
            this.router.navigate(['/dash']);
          } else if (res.user.role === 'entreprise') {
            this.router.navigate(['/entreprise']);
          } else {
            this.router.navigate(['/']); // fallback
          }

          this.isLoading = false;
        },
        error: (err) => {
          console.error('Login failed', err);
          alert(err.error.message || 'Login failed');
          this.isLoading = false;
        }
      });
  }
}
