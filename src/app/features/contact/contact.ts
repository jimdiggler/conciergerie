import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]+$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
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
