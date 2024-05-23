import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxeadoresComponent } from './infoboxeadores.component';

describe('InfoboxeadoresComponent', () => {
  let component: InfoboxeadoresComponent;
  let fixture: ComponentFixture<InfoboxeadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoboxeadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoboxeadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
