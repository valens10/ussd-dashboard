import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSetupComponent } from './branch-setup.component';

describe('BranchSetupComponent', () => {
  let component: BranchSetupComponent;
  let fixture: ComponentFixture<BranchSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
