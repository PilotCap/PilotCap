import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { InvestmentService, Investment } from '../../services/investment.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgClass, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  investments: Investment[] = [];

  availableBalance = 0;
  totalInvested = 0;
  averageReturn = 0;

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.loadInvestments();
    this.loadStats();
    this.calculateAverageReturn();
  }


  loadInvestments(): void {
    this.investmentService.getUserInvestments().subscribe({
      next: (data : any) => this.investments = data,
      error: (err : any) => console.error('Erreur lors du chargement des investissements:', err)
    });
  }

  loadStats(): void {
    this.investmentService.getDashboardStats().subscribe({
      next: (stats : any) => {
        this.availableBalance = stats.balance;
        this.totalInvested = stats.total;
        this.averageReturn = parseFloat(stats.averageReturn.toFixed(2));
      },
      error: (err : any) => console.error('Erreur lors du chargement des stats:', err)
    });
  }

  private calculateAverageReturn(): number {
    const returns = this.investments.map(inv => parseFloat(inv.return.replace('%', '').replace('+', '')));
    const total = returns.reduce((sum, val) => sum + val, 0);
    return returns.length ? +(total / returns.length).toFixed(2) : 0;
  }
}
