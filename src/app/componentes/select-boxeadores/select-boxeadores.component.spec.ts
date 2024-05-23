import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxeadoresComponent } from './select-boxeadores.component';

describe('SelectBoxeadoresComponent', () => {
  let component: SelectBoxeadoresComponent;
  let fixture: ComponentFixture<SelectBoxeadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectBoxeadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectBoxeadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
