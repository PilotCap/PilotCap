import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investissement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Invest.component.html',
  styleUrls: ['./Invest.component.css']
})
export class InvestComponent {
  soldeDisponible = 15000; // À remplacer par appel API

  entreprises = [
    {
      id: 1,
      nom: 'NeuroTech AI',
      description: 'Plateforme d\'IA médicale pour le diagnostic précoce',
      objectif: 1200000,
      progression: 82,
      ticketMin: 5000,
      duree: '3 ans',
      montantSelectionne: null
    },
    {
      id: 2,
      nom: 'GreenEnergy Solutions',
      description: 'Technologie de stockage d\'énergie renouvelable',
      objectif: 800000,
      progression: 65,
      ticketMin: 2500,
      duree: '5 ans',
      montantSelectionne: null
    },
    {
      id: 3,
      nom: 'UrbanFarm',
      description: 'Fermes verticales urbaines automatisées',
      objectif: 1500000,
      progression: 45,
      ticketMin: 10000,
      duree: '4 ans',
      montantSelectionne: null
    }
  ];

  investir(entreprise: any) {
    if (this.validInvestissement(entreprise)) {
      // Logique d'investissement (API, blockchain, etc.)
      console.log(`Investissement de ${entreprise.montantSelectionne}€ dans ${entreprise.nom}`);
      
      // Mise à jour du solde (temporaire)
      this.soldeDisponible -= entreprise.montantSelectionne;
      alert('Investissement confirmé !');
    }
  }

  private validInvestissement(entreprise: any): boolean {
    return entreprise.montantSelectionne &&
           entreprise.montantSelectionne >= entreprise.ticketMin &&
           entreprise.montantSelectionne <= this.soldeDisponible;
  }
}