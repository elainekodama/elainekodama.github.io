import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EviteComponent } from './evite.component';

describe('EviteComponent', () => {
  let component: EviteComponent;
  let fixture: ComponentFixture<EviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EviteComponent]
    });
    fixture = TestBed.createComponent(EviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
