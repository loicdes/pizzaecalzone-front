import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-paiement-popup',
  templateUrl: './paiement-popup.component.html',
  styleUrls: ['./paiement-popup.component.scss']
})
export class PaiementPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PaiementPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  confirmer() {
    this.dialogRef.close(this.data.commande);
  }
}
