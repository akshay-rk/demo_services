import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlecontComponent } from './middlecont.component';

describe('MiddlecontComponent', () => {
  let component: MiddlecontComponent;
  let fixture: ComponentFixture<MiddlecontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddlecontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddlecontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
