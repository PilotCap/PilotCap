import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../services/proposal.service';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './entreprise.component.html',
  imports: [
    NgForOf,
    DatePipe
  ],
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  proposals: any[] = [];

  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.loadProposals();
  }

  loadProposals() {
    this.proposalService.getEntrepriseProposals().subscribe({
      next: (data) => {
        this.proposals = data;
        console.log(data); // Pour debug
      },
      error: (err) => {
        console.error('Erreur lors du chargement des propositions :', err);
      }
    });
  }

    acceptProposal(id: string) {
      this.proposalService.updateStatus(id, 'accepted').subscribe({
        next: () => this.loadProposals(),
        error: (err) => console.error('Erreur acceptation :', err)
      });
    }

    rejectProposal(id: string) {
      this.proposalService.updateStatus(id, 'rejected').subscribe({
        next: () => this.loadProposals(),
        error: (err) => console.error('Erreur rejet :', err)
      });
    }


}
