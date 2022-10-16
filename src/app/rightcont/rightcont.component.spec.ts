import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcontComponent } from './rightcont.component';

describe('RightcontComponent', () => {
  let component: RightcontComponent;
  let fixture: ComponentFixture<RightcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightcontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
