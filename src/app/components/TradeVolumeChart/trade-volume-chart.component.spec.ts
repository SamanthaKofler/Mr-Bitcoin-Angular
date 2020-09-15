import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeVolumeChartComponent } from './trade-volume-chart.component';

describe('TradeVolumeChartComponent', () => {
  let component: TradeVolumeChartComponent;
  let fixture: ComponentFixture<TradeVolumeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeVolumeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeVolumeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
