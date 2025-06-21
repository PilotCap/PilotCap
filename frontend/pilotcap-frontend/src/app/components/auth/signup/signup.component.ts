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
    password: '',
    role: ''
  };

  confirmPassword: string = '';
  passwordMismatch: boolean = false;
  isSubmitting = false;



constructor(private http: HttpClient, private router: Router) {}

onSubmit() {
  this.passwordMismatch = this.signupData.password !== this.confirmPassword;

  if (this.passwordMismatch) return;

  this.isSubmitting = true;

  console.log('Signup Data:', this.signupData);

  this.http.post('http://localhost:5000/api/users/signup', this.signupData)
    .subscribe((response: any) => {
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('role', response.role);

      if (response.role === 'investisseur') {
        this.router.navigate(['/dash']);
      } else if (response.role === 'entreprise') {
        this.router.navigate(['/entreprise']);
      }
    }, error => {
      alert('Signup failed');
    });
}

}
