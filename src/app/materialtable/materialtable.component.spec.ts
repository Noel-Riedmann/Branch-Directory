import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtableComponent } from './materialtable.component';

describe('MaterialtableComponent', () => {
  let component: MaterialtableComponent;
  let fixture: ComponentFixture<MaterialtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialtableComponent]
    });
    fixture = TestBed.createComponent(MaterialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
