import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClienteComponent } from './app-cliente.component';

describe('AppClienteComponent', () => {
  let component: AppClienteComponent;
  let fixture: ComponentFixture<AppClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppClienteComponent]
    });
    fixture = TestBed.createComponent(AppClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
