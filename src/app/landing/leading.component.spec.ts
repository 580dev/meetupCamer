import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingComponent } from './leading.component';

describe('LeadingComponent', () => {
  let component: LeadingComponent;
  let fixture: ComponentFixture<LeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
