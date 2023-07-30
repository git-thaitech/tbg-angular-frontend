import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessingComponent } from './in-processing.component';

describe('InProcessingComponent', () => {
  let component: InProcessingComponent;
  let fixture: ComponentFixture<InProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
