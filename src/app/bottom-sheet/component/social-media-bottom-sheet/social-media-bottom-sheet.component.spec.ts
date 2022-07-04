import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBottomSheetComponent } from './social-media-bottom-sheet.component';

describe('SocialMediaBottomSheetComponent', () => {
  let component: SocialMediaBottomSheetComponent;
  let fixture: ComponentFixture<SocialMediaBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
