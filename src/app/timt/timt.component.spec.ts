import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIMTComponent } from './timt.component';

describe('TIMTComponent', () => {
  let component: TIMTComponent;
  let fixture: ComponentFixture<TIMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TIMTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TIMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
