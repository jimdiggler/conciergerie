import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';
import { LegalNotice } from './features/legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'mentions-legales', component: LegalNotice }
];
