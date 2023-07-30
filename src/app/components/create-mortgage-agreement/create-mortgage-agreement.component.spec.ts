import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMortgageAgreementComponent } from './create-mortgage-agreement.component';

describe('CreateMortgageAgreementComponent', () => {
  let component: CreateMortgageAgreementComponent;
  let fixture: ComponentFixture<CreateMortgageAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMortgageAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMortgageAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
