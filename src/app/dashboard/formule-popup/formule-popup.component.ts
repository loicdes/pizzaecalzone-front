import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-formule-popup',
  templateUrl: './formule-popup.component.html',
  styleUrls: ['./formule-popup.component.scss']
})
export class FormulePopupComponent implements OnInit {
  boissonsSelectionnees;
  pizzasSelectionnees = [];
  constructor(public dialogRef: MatDialogRef<FormulePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  confirmer() {
    this.dialogRef.close({
      pizzas: this.pizzasSelectionnees,
      boissons: this.boissonsSelectionnees
    });
  }

  isSelected(pizza) {
    return this.pizzasSelectionnees.some(p => p._id === pizza._id);
  }
}
