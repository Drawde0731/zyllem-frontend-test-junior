import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeatureComponent } from './article.feature.component';

describe('ArticleFeatureComponent', () => {
  let component: ArticleFeatureComponent;
  let fixture: ComponentFixture<ArticleFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFeatureComponent]
    });
    fixture = TestBed.createComponent(ArticleFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
