import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyComponent } from './edit-company-component.component';

describe('EditCompanyComponentComponent', () => {
  let component: EditCompanyComponent;
  let fixture: ComponentFixture<EditCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCompanyComponent]
    });
    fixture = TestBed.createComponent(EditCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
