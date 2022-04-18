import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAllComponent } from './transaction-all.component';

describe('TransactionAllComponent', () => {
  let component: TransactionAllComponent;
  let fixture: ComponentFixture<TransactionAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
