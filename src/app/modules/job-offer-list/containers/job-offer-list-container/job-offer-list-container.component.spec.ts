import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobOfferListContainerComponent } from './job-offer-list-container.component';

describe('JobOfferListContainerComponent', () => {
  let component: JobOfferListContainerComponent;
  let fixture: ComponentFixture<JobOfferListContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferListContainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobOfferListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
