import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


declare global {
  interface Window {
    ethereum?: any;
  }
}

@Component({
  selector: 'app-addfunds',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addfunds.component.html',
  styleUrls: ['./addfunds.component.css']
})
export class AddFundsComponent {
  // Variables pour MetaMask
  cryptoAmount: number = 0.1;
  ethPrice: number = 3200; // À mettre à jour via API
  walletConnected: boolean = false;
  walletAddress: string = '';
  paymentAddress: string = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Remplacez par votre adresse de réception
  
  // Variables pour les méthodes traditionnelles
  amount: number | null = null;
  selectedMethod: string | null = null;
  showMetaMaskSection: boolean = false;

  constructor(private router: Router) {}

  // Méthode pour basculer vers la section MetaMask
  toggleMetaMaskSection() {
    this.showMetaMaskSection = !this.showMetaMaskSection;
    if (this.showMetaMaskSection) {
      this.checkMetaMaskAvailability();
    }
  }

  // Vérifie si MetaMask est installé
  checkMetaMaskAvailability(): boolean {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask n\'est pas installé. Veuillez l\'installer pour continuer.');
      window.open('https://metamask.io/download.html', '_blank');
      return false;
    }
    return true;
  }

  // Connecte le wallet MetaMask
  async connectMetaMask() {
    if (!this.checkMetaMaskAvailability()) return;

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      this.walletAddress = accounts[0];
      this.walletConnected = true;
      
      // Écoute les changements de compte
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        this.walletAddress = accounts[0] || '';
        this.walletConnected = !!this.walletAddress;
      });
      
      // Écoute les changements de réseau
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

    } catch (error) {
      console.error('Erreur de connexion MetaMask:', error);
      alert('Erreur lors de la connexion à MetaMask');
    }
  }

  // Traite le paiement via MetaMask
  async processMetaMaskPayment() {
    if (!this.walletConnected) {
      await this.connectMetaMask();
      return;
    }

    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: this.walletAddress,
          to: this.paymentAddress,
          value: this.convertEthToWei(this.cryptoAmount),
          gasLimit: '0x5208' // 21000 Gwei
        }]
      });
      
      console.log('Transaction envoyée:', txHash);
      alert(`Transaction envoyée! Hash: ${txHash}`);
      
      // Ici vous devriez envoyer le hash à votre backend pour vérification
      // await this.verifyTransaction(txHash);
      
      this.router.navigate(['/dashboard']);

    } catch (error) {
      console.error('Erreur de transaction:', error);
      alert('Erreur lors de la transaction');
    }
  }

  // Convertit ETH en Wei
  private convertEthToWei(eth: number): string {
    return '0x' + (eth * 10**18).toString(16);
  }

  // Méthodes traditionnelles
  selectPaymentMethod(method: string) {
    this.selectedMethod = method;
    this.showMetaMaskSection = false;
  }

  addFunds() {
    if (this.amount && this.selectedMethod) {
      console.log(`Dépôt de ${this.amount}€ via ${this.selectedMethod}`);
      alert(`✅ ${this.amount}€ ajoutés à votre portefeuille !`);
      this.router.navigate(['/dashboard']);
    }
  }

  // Méthode pour récupérer le prix ETH en temps réel (exemple)
  async updateEthPrice() {
    try {
      // Exemple avec l'API CoinGecko
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur');
      const data = await response.json();
      this.ethPrice = data.ethereum.eur;
    } catch (error) {
      console.error('Erreur de récupération du prix:', error);
    }
  }

  ngOnInit() {
    this.updateEthPrice();
  }
}