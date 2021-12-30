import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { JobOffer } from '../../../../modules/create-job-offer/domain/job-offer.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private readonly endpoints = {
    jobOffers: `${environment.apiUrl}/job-offer`,
    jobOffer: `${environment.apiUrl}/job-offer/{0}`
  };

  constructor(private httpClient: HttpClient) {
  }

  addJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
    return this.httpClient.post<JobOffer>(this.endpoints.jobOffers, jobOffer);
  }

  loadJobOffers(): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>(this.endpoints.jobOffers).pipe(map((response) => {
      response.map((row) => (row.id = row.jobOfferId));
      return response;
    }));
  }

  getJobOffer(id: number): Observable<JobOffer> {
    return this.httpClient.get<JobOffer>(this.endpoints.jobOffer.format((String(id)))).pipe(
      map(response => ({
          ...response
        }))
    );
  }
}
