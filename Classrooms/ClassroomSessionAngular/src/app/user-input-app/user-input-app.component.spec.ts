import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputAppComponent } from './user-input-app.component';

describe('UserInputAppComponent', () => {
  let component: UserInputAppComponent;
  let fixture: ComponentFixture<UserInputAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInputAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
