import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showSuccess = signal(false)
  submitted = signal(false)
  formGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'query': new FormControl('', Validators.required),
    'message': new FormControl('', Validators.required),
    'consent': new FormControl('', Validators.required)
  })

  handleSubmit() {
    this.submitted.set(true)

    if (this.formGroup.valid) {
      this.showSuccess.set(true)
      this.submitted.set(false)
      this.formGroup.reset()
      return
    }

    this.formGroup.markAllAsTouched()
  }
}
