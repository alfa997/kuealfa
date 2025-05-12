import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PembelianKuePage } from './pembelian-kue.page';

describe('DaftarPage', () => {
  let component: PembelianKuePage;
  let fixture: ComponentFixture<PembelianKuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelianKuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
