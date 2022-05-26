import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileCardComponent } from './student-profile-card.component';

describe('StudentProfileCardComponent', () => {
  let component: StudentProfileCardComponent;
  let fixture: ComponentFixture<StudentProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
