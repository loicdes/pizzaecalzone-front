import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Commande } from '../models/commande';
import { DashboardData, ProduitSimple } from '../models/dashboardData';
import { DashboardService } from '../services/dashboard.service';
import { SnackBarService } from '../services/snackbar.service';
import { FormulePopupComponent } from './formule-popup/formule-popup.component';
import { PaiementPopupComponent } from './paiement-popup/paiement-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData: DashboardData;
  dataLoaded = false;
  commande: Commande = {
    produits : [],
    client: undefined,
    prix: 0
  };
  constructor(private dashboardService: DashboardService,
    public dialog: MatDialog, private snackbarService: SnackBarService) { }

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe(dashboardData => {
      this.dashboardData = dashboardData;
      this.dataLoaded = true;
    });
  }

  ajouterALaCommande(produit, prix: number) {
    this.commande.produits.push({
      _id: produit._id,
      designation: produit.designation,
      prix
    });
    this.actualiserPrixCommande();
  }

  actualiserPrixCommande() {
    let prix = 0;
    this.commande.produits.map(p => {
      prix += p.prix;
    });
    this.commande.prix = Number.parseFloat(prix.toFixed(2));
  }
  ouvrirPopupFormule(formule: ProduitSimple) {
    let nbrPizzas;
    let prix;
    switch(formule.designation) {
      case 'Solo petite': case 'Calzone':
        nbrPizzas = 1;
        prix = 9.9;
        break;
        
      case 'Solo grande':
        nbrPizzas = 1;
        prix = 11.9;
        break;

      case 'Duo petite':
        nbrPizzas = 2;
        prix = 18;
        break;
        
      case 'Duo grande':
        nbrPizzas = 2;
        prix = 28;
        break;
        
      case 'Trio petite':
        nbrPizzas = 3;
        prix = 28;
        break;
        
      case 'Trio grande':
        nbrPizzas = 3;
        prix = 33;
        break;
        
      case 'Duo petite':
        nbrPizzas = 2;
        prix = 18;
        break;
    }
    const dialog = this.dialog.open(FormulePopupComponent, {
      disableClose: true,
      data : {
        nbrPizzas: nbrPizzas,
        prix: prix,
        pizzas: this.dashboardData.pizzas.concat(this.dashboardData.calzones),
        boissons: this.dashboardData.boissons
      }
    });
    dialog.afterClosed().subscribe(produitsSelectionnes => {
      formule.commentaire = produitsSelectionnes.pizzas.map(p => p.designation).join(',') + ` - ${produitsSelectionnes.boissons.designation}`;
      this.commande.produits.push({
        _id: formule._id,
        designation: formule.designation,
        commentaire: formule.commentaire,
        prix: formule.prix
      });
      this.actualiserPrixCommande();
    });
  }

  supprimer(produit) {
    const index = this.commande.produits.findIndex(p => p._id === produit._id && p.prix === produit.prix);
    if(index > -1) {
      this.commande.produits.splice(index, 1);
      this.actualiserPrixCommande();
    }
  }

  annuler(){
    this.commande.produits = [];
    this.actualiserPrixCommande();
  }
  ouvrirPopupPaiement() {
    const paiementDialog = this.dialog.open(PaiementPopupComponent, {
      disableClose: true,
      data: {
        commande: this.commande
      }
    });
    paiementDialog.afterClosed().subscribe(commande => {
      this.dashboardService.creerCommande(commande).subscribe( () => this.snackbarService.open('Commande créée', 'success'))
    });
  }

}
