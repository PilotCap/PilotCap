import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    password: ''
  };

  confirmPassword: string = '';
  passwordMismatch: boolean = false;
  isSubmitting = false;



constructor(private http: HttpClient, private router: Router) {}

onSubmit() {
  this.passwordMismatch = this.signupData.password !== this.confirmPassword;

  if (this.passwordMismatch) return;

  this.isSubmitting = true;

  this.http.post<any>('http://localhost:5000/api/users/signup', this.signupData)
    .subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dash']);
      },
      error: (err) => {
        alert(err.error.message || 'Signup failed');
        this.isSubmitting = false;
      }
    });
}

}
