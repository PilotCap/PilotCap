import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  isLoading = false;

  onSubmit() {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', this.credentials);
      this.isLoading = false;
    }, 1500);
  }
}