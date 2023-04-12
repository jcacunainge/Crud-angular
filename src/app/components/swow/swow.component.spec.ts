import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwowComponent } from './swow.component';

describe('SwowComponent', () => {
  let component: SwowComponent;
  let fixture: ComponentFixture<SwowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
