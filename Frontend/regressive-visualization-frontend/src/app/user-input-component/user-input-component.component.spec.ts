import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputComponentComponent } from './user-input-component.component';

describe('UserInputComponentComponent', () => {
  let component: UserInputComponentComponent;
  let fixture: ComponentFixture<UserInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
