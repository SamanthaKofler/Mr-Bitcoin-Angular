import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBitcoinsChartComponent } from './total-bitcoins-chart.component';

describe('TotalBitcoinsChartComponent', () => {
  let component: TotalBitcoinsChartComponent;
  let fixture: ComponentFixture<TotalBitcoinsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBitcoinsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBitcoinsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
