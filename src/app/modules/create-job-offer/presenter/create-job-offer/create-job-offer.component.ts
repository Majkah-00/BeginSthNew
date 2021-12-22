import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JobOffer } from '../../domain/jobOffer.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-job-offer',
  templateUrl: './create-job-offer.component.html',
  styleUrls: ['./create-job-offer.component.scss']
})
export class CreateJobOfferComponent implements OnInit {
  @Output() jobOffer = new EventEmitter<JobOffer>();

  form = this.fb.group({
    jobOfferName: ['', Validators.required],
    company: ['', Validators.required],
    location: ['', Validators.required],
    phone: ['', Validators.required],
    salaryFrom: ['', Validators.required],
    salaryTo: ['', Validators.required],
    jobDescription: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  async onAddJobOffer() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.jobOffer.emit(this.form.value);
      this.form.reset();
      const toast = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    }
  }
}
