import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadBoxeadoresComponent } from './lazy-load-boxeadores.component';

describe('LazyLoadBoxeadoresComponent', () => {
  let component: LazyLoadBoxeadoresComponent;
  let fixture: ComponentFixture<LazyLoadBoxeadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoadBoxeadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyLoadBoxeadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
