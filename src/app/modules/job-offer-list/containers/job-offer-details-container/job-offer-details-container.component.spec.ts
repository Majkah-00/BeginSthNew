import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobOfferDetailsContainerComponent } from './job-offer-details-container.component';

describe('JobOfferDetailsContainerComponent', () => {
  let component: JobOfferDetailsContainerComponent;
  let fixture: ComponentFixture<JobOfferDetailsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferDetailsContainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobOfferDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
