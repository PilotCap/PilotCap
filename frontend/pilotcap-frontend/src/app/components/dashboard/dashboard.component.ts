import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface Investment {
  project: string;
  type: string;
  amount: number;
  date: string;
  return: string;
  status: 'Actif' | 'En attente' | 'Clôturé';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  investments: Investment[] = [
    {
      project: "TechStart",
      type: "Private Equity",
      amount: 4500,
      date: "15/05/2025",
      return: "+7.5%",
      status: "Actif"
    },
    {
      project: "GreenEnergy",
      type: "Obligation verte",
      amount: 3000,
      date: "22/04/2025",
      return: "+5.2%",
      status: "Actif"
    },
    {
      project: "ImmoPlus",
      type: "Immobilier",
      amount: 5250,
      date: "10/03/2025",
      return: "+4.8%",
      status: "En attente"
    },
    {
      project: "BioHealth",
      type: "Startup",
      amount: 2000,
      date: "28/02/2025",
      return: "+12.1%",
      status: "Clôturé"
    }
  ];

  // Dashboard stats
  availableBalance = 5250;
  totalInvested = 12750;
  averageReturn = 6.2;
}