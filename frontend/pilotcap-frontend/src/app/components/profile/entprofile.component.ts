import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entreprise-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entprofile.component.html',
  styleUrls: ['./entprofile.component.css']
})
export class EntrepriseProfileComponent {
  editMode = false;

// Dans votre composant
entreprise = {
  nom: 'Ma Startup Innovante',
  secteur: 'Technologie Financière',
  email: 'contact@mastartup.com',
  wallet: '0x742d35Cc6e54c8f329253b84f8c454e443874de',
  creation: 2020,
  ca: 2400000, // Chiffre d'affaires
  croissance: 24, // Pourcentage
  capital: 500000 // Capital social
};

  onUpdate() {
    console.log('Mise à jour :', this.entreprise);
    this.editMode = false;
    // 🔁 Appel API à ajouter ici si nécessaire
  }
}
