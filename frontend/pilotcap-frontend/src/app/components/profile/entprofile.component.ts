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
  originalData: any;
  
  entreprise = {
    nom: 'Ma Startup Innovante',
    secteur: 'Technologie Financière',
    email: 'contact@mastartup.com',
    wallet: '0x742d35Cc6e54c8f329253b84f8c454e443874de',
    anneeCreation: 2020,
    chiffreAffaires: '2.4M €',
    capitalSocial: '500K €'
  };

  activateEditMode() {
    this.originalData = {...this.entreprise}; // Sauvegarde des données originales
    this.editMode = true;
  }

  saveChanges() {
    // Ici vous ajouteriez la logique pour sauvegarder en backend
    console.log('Données mises à jour:', this.entreprise);
    this.editMode = false;
  }

  cancelEdit() {
    this.entreprise = {...this.originalData}; // Restauration des données
    this.editMode = false;
  }
}