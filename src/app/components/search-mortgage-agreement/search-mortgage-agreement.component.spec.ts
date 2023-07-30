import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMortgageAgreementComponent } from './search-mortgage-agreement.component';

describe('SearchMortgageAgreementComponent', () => {
  let component: SearchMortgageAgreementComponent;
  let fixture: ComponentFixture<SearchMortgageAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMortgageAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMortgageAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
