import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationServerComponent } from './string-interpolation-server.component';

describe('StringInterpolationServerComponent', () => {
  let component: StringInterpolationServerComponent;
  let fixture: ComponentFixture<StringInterpolationServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpolationServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpolationServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
