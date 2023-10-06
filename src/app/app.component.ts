import { Component, OnInit } from '@angular/core';

import { ZyllemApiService } from "./app.service";
import { Article, VideoArticle, NormalArticle, FeaturedArticle, FeaturedAdArticle } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
articleItem: any;
  constructor(
    private readonly apiService: ZyllemApiService,
  ) { }

  private results: Article[];
  videoArticleHighlight: VideoArticle;

  get articles() {

    return this.results?.filter(
      article => article.type === 'NORMAL' || article.type === 'FEATURED' || article.type === 'FEATURED_AD'
    ) as (NormalArticle | FeaturedArticle | FeaturedAdArticle )[];

  }

  ngOnInit(): void {
    this.apiService.getArticles()
      .subscribe(result => {
        this.results = result;
        this.videoArticleHighlight = this.results.find(article => article.type === 'VIDEO') as VideoArticle;
      });
  }
}
