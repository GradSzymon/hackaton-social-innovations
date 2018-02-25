import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentDetailsComponent } from './producent-details.component';

describe('ProducentDetailsComponent', () => {
  let component: ProducentDetailsComponent;
  let fixture: ComponentFixture<ProducentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
