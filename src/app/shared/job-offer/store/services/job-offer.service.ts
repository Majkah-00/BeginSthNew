import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { JobOffer } from '../../../../modules/create-job-offer/domain/jobOffer.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private readonly endpoints = {
    jobOffer: `${environment.apiUrl}/job-offer`,
  };

  constructor(private httpClient: HttpClient) {
  }

  addJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
    return  this.httpClient.post<JobOffer>(this.endpoints.jobOffer, jobOffer);
  }

  loadJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
    return this.httpClient.get<JobOffer>(this.endpoints.jobOffer);
  }
}
