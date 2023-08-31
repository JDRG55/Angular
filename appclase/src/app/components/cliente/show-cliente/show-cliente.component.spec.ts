import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClienteComponent } from './show-cliente.component';

describe('ShowClienteComponent', () => {
  let component: ShowClienteComponent;
  let fixture: ComponentFixture<ShowClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowClienteComponent]
    });
    fixture = TestBed.createComponent(ShowClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
