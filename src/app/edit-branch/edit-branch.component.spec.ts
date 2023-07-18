import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchComponent } from './edit-branch.component';

describe('EditBranchComponent', () => {
  let component: EditBranchComponent;
  let fixture: ComponentFixture<EditBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBranchComponent]
    });
    fixture = TestBed.createComponent(EditBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
