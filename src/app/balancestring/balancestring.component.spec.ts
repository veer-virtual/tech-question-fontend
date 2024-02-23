import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancestringComponent } from './balancestring.component';

describe('BalancestringComponent', () => {
  let component: BalancestringComponent;
  let fixture: ComponentFixture<BalancestringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancestringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
