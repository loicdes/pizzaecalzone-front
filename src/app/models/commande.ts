import { Client } from "./client";
import { ProduitSimple } from "./dashboardData";

export class Commande {
    produits: ProduitSimple[];
    client: Client;
    prix: number;
    date?: Date;
}
