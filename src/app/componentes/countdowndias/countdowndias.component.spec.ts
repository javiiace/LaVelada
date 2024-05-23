import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdowndiasComponent } from './countdowndias.component';

describe('CountdowndiasComponent', () => {
  let component: CountdowndiasComponent;
  let fixture: ComponentFixture<CountdowndiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdowndiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountdowndiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
