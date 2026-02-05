import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-concierge-service',
  imports: [MatCardModule],
  templateUrl: './concierge-service.html',
  styleUrl: './concierge-service.scss'
})
export class ConciergeService {

  packs = [
    {
      title: 'Pack location (cure thermale)',
      description: 'Accueil et gestion des clés, inspection et vérification de la propreté.',
      items: [
        'Remise des clés',
        'Consignes du logement',
        'Reprise des clés',
        'Inspections des lieux avant et après',
        'Vérification de la propreté'
      ],
      price: '18% du montant du loyer',
      image: 'assets/curethermale.png'
    },
    {
      title: 'Pack ménage (option pour les locataires)',
      description: 'Ménage professionnel selon la taille du logement.',
      items: ['Studio : 30€', 'T2 : 40€', 'T3 : 50€', 'T4 : 60€', 'Supplément 10€ pour pièce supplémentaire'],
      image: 'assets/menage.png'
    },
    {
      title: 'Pack linge de lit & toilette',
      description: 'Fourniture et préparation du linge de lit et de toilette prêt à l\'arrivée.',
      items: [
        'Kit 1 personne : 15€',
        'Kit 2 personnes : 20€',
        'Drap de bain : 6€',
        'Serviette de toilette : 4€',
        'Tapis de bain : 3€'
      ],
      image: 'assets/linge.png'
    }
  ];

}

