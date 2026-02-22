import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatCardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // -----------------------------------------------------------------
  // INJECTORS
  // -----------------------------------------------------------------
  private fb = inject(FormBuilder);

  // -----------------------------------------------------------------
  // ATTRIBUTES
  // -----------------------------------------------------------------
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;

  // -----------------------------------------------------------------
  // CONSTRUCTOR
  // -----------------------------------------------------------------
  constructor() {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]+$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // -----------------------------------------------------------------
  // METHODS
  // -----------------------------------------------------------------
  goToLink(url: string) {
    window.location.href = url;
  }

  openMailto() {
    if (this.contactForm.valid) {
      window.location.href = this.mailtoLink();
    }
  }

  mailtoLink() {
    const nom = encodeURIComponent(this.contactForm.value.nom || '');
    const prenom = encodeURIComponent(this.contactForm.value.prenom || '');
    const email = encodeURIComponent(this.contactForm.value.email || '');
    const telephone = encodeURIComponent(this.contactForm.value.telephone || '');
    const message = encodeURIComponent(this.contactForm.value.message || '');
    const body = `Nom: ${nom}%0APrénom: ${prenom}%0AEmail: ${email}%0ATéléphone: ${telephone}%0AMessage: ${message}`;
    return `mailto:lodgeandclean@outlook.com?subject=Contact%20depuis%20le%20site&body=${body}`;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      this.submitSuccess = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        this.submitSuccess = false;
      }, 3000);
    }
  }

  // -----------------------------------------------------------------
  // GETTERS
  // -----------------------------------------------------------------
  get nom() {
    return this.contactForm.get('nom');
  }

  get prenom() {
    return this.contactForm.get('prenom');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get telephone() {
    return this.contactForm.get('telephone');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
