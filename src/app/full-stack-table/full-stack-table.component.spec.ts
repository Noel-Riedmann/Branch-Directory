import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackTableComponent } from './full-stack-table.component';

describe('FullStackTableComponent', () => {
  let component: FullStackTableComponent;
  let fixture: ComponentFixture<FullStackTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullStackTableComponent]
    });
    fixture = TestBed.createComponent(FullStackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
