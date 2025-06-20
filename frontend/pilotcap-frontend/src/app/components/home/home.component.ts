import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // Add this for icons
import { MatDividerModule } from '@angular/material/divider'; // Add this for dividers
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    // Import Material modules directly (no need for MaterialModule in standalone)
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule, 
    MatDividerModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  entreprises = [
    { nom: 'TechCorp', taux: 8, capital: 500000 },
    { nom: 'GreenEnergy', taux: 6.5, capital: 300000 },
    { nom: 'AgroStart', taux: 7.2, capital: 150000 }
  ];
}