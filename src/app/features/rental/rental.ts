import { Component } from '@angular/core';

interface Picture {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [],
  templateUrl: './rental.html',
})
export class Rental {
  // -----------------------------------------------------------------
  // ATTRIBUTES
  // -----------------------------------------------------------------
  pictures: Picture[] = [
    {
      id: 1,
      src: 'assets/apt4.jpeg',
      alt: 'Logement 1',
      caption: 'Appartement moderne centre-ville',
    },
    {
      id: 2,
      src: 'assets/apt2.jpeg',
      alt: 'Logement 2',
      caption: 'Studio cosy avec vue',
    },
    {
      id: 3,
      src: 'assets/apt1.jpeg',
      alt: 'Logement 3',
      caption: 'Maison familiale spacieuse',
    },
    {
      id: 4,
      src: 'assets/apt3.jpeg',
      alt: 'Logement 4',
      caption: 'Appartement lumineux avec terrasse',
    },
  ];
}
