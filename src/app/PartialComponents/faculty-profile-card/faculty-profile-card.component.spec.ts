import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyProfileCardComponent } from './faculty-profile-card.component';

describe('FacultyProfileCardComponent', () => {
  let component: FacultyProfileCardComponent;
  let fixture: ComponentFixture<FacultyProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
