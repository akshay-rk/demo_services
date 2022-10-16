import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcontComponent } from './leftcont.component';

describe('LeftcontComponent', () => {
  let component: LeftcontComponent;
  let fixture: ComponentFixture<LeftcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftcontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
