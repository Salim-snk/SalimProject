import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { applicantListComponent } from './applicant-list.component';

describe('applicantListComponent', () => {
  let component: applicantListComponent;
  let fixture: ComponentFixture<applicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ applicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(applicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});