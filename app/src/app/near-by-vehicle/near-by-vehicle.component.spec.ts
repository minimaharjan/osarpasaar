import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByVehicleComponent } from './near-by-vehicle.component';

describe('NearByVehicleComponent', () => {
  let component: NearByVehicleComponent;
  let fixture: ComponentFixture<NearByVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearByVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
