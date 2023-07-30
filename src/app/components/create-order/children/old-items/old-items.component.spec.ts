import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldItemsComponent } from './old-items.component';

describe('OldItemsComponent', () => {
  let component: OldItemsComponent;
  let fixture: ComponentFixture<OldItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
