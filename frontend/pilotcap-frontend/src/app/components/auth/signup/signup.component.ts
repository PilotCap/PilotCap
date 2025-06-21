import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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

  onSubmit() {
    this.passwordMismatch = this.signupData.password !== this.confirmPassword;

    if (this.passwordMismatch) {
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      console.log('Signup successful:', this.signupData);
      this.isSubmitting = false;
    }, 1500);
  }
}
