import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelClienteComponent } from './del-cliente.component';

describe('DelClienteComponent', () => {
  let component: DelClienteComponent;
  let fixture: ComponentFixture<DelClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelClienteComponent]
    });
    fixture = TestBed.createComponent(DelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
