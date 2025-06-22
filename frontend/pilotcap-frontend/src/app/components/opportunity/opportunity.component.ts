import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface InvestmentOpportunity {
  id: string;
  projectName: string;
  sector: string;
  description: string;
  fundingGoal: number;
  minInvestment: number;
  duration: number;
  status: 'draft' | 'submitted' | 'approved' | 'funding' | 'completed' | 'rejected';
  progress: number;
  createdAt: Date;
  logoUrl?: string;
  coverImageUrl?: string;
  videoUrl?: string;
}

@Component({
  selector: 'app-enterprise-portal',
  templateUrl: './opportunity.component.html',
})
export class OpportunityComponent implements OnInit {
  currentStep = 1;
  isLoading = false;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  opportunityForm!: FormGroup;

  opportunities: InvestmentOpportunity[] = [
    {
      id: '1',
      projectName: 'NeuroTech AI',
      sector: 'technology',
      description: 'Plateforme d\'IA médicale pour le diagnostic précoce',
      fundingGoal: 1200000,
      minInvestment: 5000,
      duration: 36,
      status: 'funding',
      progress: 82,
      createdAt: new Date('2023-01-15'),
      logoUrl: 'assets/neurotech-logo.png'
    },
    {
      id: '2',
      projectName: 'GreenEnergy Solutions',
      sector: 'energy',
      description: 'Technologie de stockage d\'énergie renouvelable',
      fundingGoal: 800000,
      minInvestment: 2500,
      duration: 60,
      status: 'submitted',
      progress: 0,
      createdAt: new Date('2023-03-10'),
      logoUrl: 'assets/greenenergy-logo.png'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.opportunityForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(5)]],
      sector: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(100)]],
      fundingGoal: ['', [Validators.required, Validators.min(10000)]],
      minInvestment: ['', [Validators.required, Validators.min(1000)]],
      duration: ['', [Validators.required, Validators.min(6), Validators.max(60)]],
      videoUrl: ['', Validators.pattern(/^(https?:\/\/)?(www\.)?(youtube\.com|vimeo\.com)/)]
    });
  }

  isStepValid(step: number): boolean {
    switch (step) {
      case 1:
        return !!this.opportunityForm.get('projectName')?.valid &&
               !!this.opportunityForm.get('sector')?.valid &&
               !!this.opportunityForm.get('description')?.valid;
      case 2:
        return !!this.opportunityForm.get('fundingGoal')?.valid &&
               !!this.opportunityForm.get('minInvestment')?.valid &&
               !!this.opportunityForm.get('duration')?.valid;
      case 3:
        return true;
      default:
        return false;
    }
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    } else {
      this.submitOpportunity();
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitOpportunity(): void {
    if (this.opportunityForm.valid) {
      this.isLoading = true;

      setTimeout(() => {
        const newOpportunity: InvestmentOpportunity = {
          id: Math.random().toString(36).substring(2, 9),
          ...this.opportunityForm.value,
          status: 'submitted',
          progress: 0,
          createdAt: new Date()
        };

        this.opportunities.unshift(newOpportunity);
        this.resetForm();
        this.isLoading = false;
      }, 1500);
    }
  }

  resetForm(): void {
    this.opportunityForm.reset();
    this.currentStep = 1;
    this.selectedFile = null;
    this.previewUrl = null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  getStepName(step: number): string {
    switch (step) {
      case 1: return 'Informations';
      case 2: return 'Financement';
      case 3: return 'Médias';
      default: return '';
    }
  }

  getSectorIcon(sector: string): string {
    switch (sector) {
      case 'technology': return 'fa-brain text-indigo-400';
      case 'energy': return 'fa-leaf text-emerald-400';
      case 'health': return 'fa-heartbeat text-red-400';
      case 'agriculture': return 'fa-seedling text-amber-400';
      case 'real_estate': return 'fa-building text-blue-400';
      default: return 'fa-chart-line text-gray-400';
    }
  }

  getSectorName(sector: string): string {
    switch (sector) {
      case 'technology': return 'Technologie';
      case 'energy': return 'Énergie';
      case 'health': return 'Santé';
      case 'agriculture': return 'Agriculture';
      case 'real_estate': return 'Immobilier';
      default: return 'Autre';
    }
  }

  getStatusName(status: string = 'draft'): string {
    switch (status) {
      case 'draft': return 'Brouillon';
      case 'submitted': return 'En revue';
      case 'approved': return 'Approuvé';
      case 'funding': return 'En financement';
      case 'completed': return 'Terminé';
      case 'rejected': return 'Rejeté';
      default: return 'Inconnu';
    }
  }

  getStatusClass(status: string = 'draft'): any {
    return {
      'status-draft': status === 'draft',
      'status-submitted': status === 'submitted',
      'status-approved': status === 'approved',
      'status-funding': status === 'funding',
      'status-completed': status === 'completed',
      'status-rejected': status === 'rejected'
    };
  }

  getProgressClass(progress: number): string {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-primary';
    if (progress > 0) return 'bg-warning';
    return 'bg-gray-500';
  }
}
