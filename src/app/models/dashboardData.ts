import { Client } from "./client";

export class DashboardData {
    clients: Client[];
    pizzas: ProduitTaille[];
    calzones: ProduitTaille[];
    boissons: ProduitSimple[];
    formules: ProduitSimple[];
    salades: ProduitSimple[];
    desserts: ProduitSimple[];
}

export class ProduitSimple {
    _id: string;
    designation: string;
    prix: number;
    optionDessert?: number;
    commentaire?: string;
}

export class ProduitTaille {
    _id: string;
    designation: string;
    prix: {
        petite: number;
        grande: number;
    }
}
