import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackTableMapComponent } from './full-stack-table-map.component';

describe('FullStackTableMapComponent', () => {
  let component: FullStackTableMapComponent;
  let fixture: ComponentFixture<FullStackTableMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullStackTableMapComponent]
    });
    fixture = TestBed.createComponent(FullStackTableMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
