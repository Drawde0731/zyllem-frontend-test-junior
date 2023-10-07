import { Component, OnInit } from '@angular/core';
import { ZyllemApiService } from './app.service';
import { Article, NormalArticle, FeaturedArticle, FeaturedAdArticle, VideoArticle } from './model/article';
import { ArticleFeatureComponent } from './components/articles/feature/article.feature/article.feature.component';
import { FeatureAdComponent } from './components/articles/feature-ad/feature-ad.component';
import { ArticleVideoComponent } from './components/articles/video/article.video.component';
import { ArticleNormalComponent } from './components/articles/normal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articleItem: any;
  articles: (NormalArticle | FeaturedArticle | FeaturedAdArticle)[] = [];
  videoArticleHighlight: VideoArticle | undefined;

  constructor(
    public apiService: ZyllemApiService,
    public articleNormalComponent: ArticleNormalComponent,
    public articleFeatureComponent: ArticleFeatureComponent,
    public featureAdComponent: FeatureAdComponent
  ) {}

  ngOnInit(): void {
    // Load video articles separately
    // this.articleVideoComponent.loadVideoArticles().subscribe((videoArticle) => {
    //   this.videoArticleHighlight = videoArticle;
    // });

    // Load normal articles from ArticleNormalComponent and push them directly
    this.articleNormalComponent.loadNormalArticles().subscribe((normalArticles) => {
      this.articles.push(...normalArticles);
    });

    // Load feature articles and push them directly
    this.articleFeatureComponent.loadFeatureArticles().subscribe((featureArticles) => {
      this.articles.push(...featureArticles);
    });

    // Load feature ad articles and push them directly
    this.featureAdComponent.loadFeatureAdArticles().subscribe((featureAdArticles) => {
      this.articles.push(...featureAdArticles);

      console.log(this.articles);
    });
  }
}
