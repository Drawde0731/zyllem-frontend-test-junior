import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAdComponent } from './feature-ad.component';

describe('FeatureAdComponent', () => {
  let component: FeatureAdComponent;
  let fixture: ComponentFixture<FeatureAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureAdComponent]
    });
    fixture = TestBed.createComponent(FeatureAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
