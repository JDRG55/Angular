import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdClienteComponent } from './upd-cliente.component';

describe('UpdClienteComponent', () => {
  let component: UpdClienteComponent;
  let fixture: ComponentFixture<UpdClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdClienteComponent]
    });
    fixture = TestBed.createComponent(UpdClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
