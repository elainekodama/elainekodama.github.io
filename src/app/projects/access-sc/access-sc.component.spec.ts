import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessScComponent } from './access-sc.component';

describe('AccessScComponent', () => {
  let component: AccessScComponent;
  let fixture: ComponentFixture<AccessScComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessScComponent]
    });
    fixture = TestBed.createComponent(AccessScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
