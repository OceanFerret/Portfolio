import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputOutputComponent } from './user-input-output.component';

describe('UserInputOutputComponent', () => {
  let component: UserInputOutputComponent;
  let fixture: ComponentFixture<UserInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
