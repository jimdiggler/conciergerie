import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';
import { LegalNotice } from './features/legal-notice/legal-notice';
import { ConciergeService } from './features/concierge-service/concierge-service';
import { Rental } from './features/rental/rental';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'mentions-legales', component: LegalNotice },
  { path: 'concierge-service', component: ConciergeService },
  { path: 'locations', component: Rental },
];
