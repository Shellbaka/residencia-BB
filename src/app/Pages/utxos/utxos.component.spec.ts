import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtxosComponent } from './utxos.component';

describe('UtxosComponent', () => {
  let component: UtxosComponent;
  let fixture: ComponentFixture<UtxosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtxosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtxosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
