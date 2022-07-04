import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonActionsBottomSheetComponent } from './common-actions-bottom-sheet.component';

describe('CommonActionsBottomSheetComponent', () => {
  let component: CommonActionsBottomSheetComponent;
  let fixture: ComponentFixture<CommonActionsBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonActionsBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonActionsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
