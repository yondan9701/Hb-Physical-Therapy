import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClinicoComponent } from './registro-clinico.component';

describe('RegistroClinicoComponent', () => {
  let component: RegistroClinicoComponent;
  let fixture: ComponentFixture<RegistroClinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroClinicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
