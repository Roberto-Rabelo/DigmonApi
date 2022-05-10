import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigmonDetalhesComponent } from './digmon-detalhes.component';

describe('DigmonDetalhesComponent', () => {
  let component: DigmonDetalhesComponent;
  let fixture: ComponentFixture<DigmonDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigmonDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigmonDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
