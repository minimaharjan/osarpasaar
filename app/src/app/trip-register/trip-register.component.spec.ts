import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripRegisterComponent } from './trip-register.component';

describe('TripRegisterComponent', () => {
  let component: TripRegisterComponent;
  let fixture: ComponentFixture<TripRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
