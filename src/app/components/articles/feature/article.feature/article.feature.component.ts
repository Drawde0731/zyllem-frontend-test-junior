import { Component, Input, OnInit } from '@angular/core';
import { Article } from "src/app/model/article";
import { Observable, map } from 'rxjs';
import { ZyllemApiService } from 'src/app/app.service';

@Component({
  selector: 'app-article-feature',
  templateUrl: './article.feature.component.html',
  styleUrls: ['./article.feature.component.css']
})
export class ArticleFeatureComponent implements OnInit {
  @Input() article: Article;
  featureArticles$: Observable<Article[]>;

  constructor(public zyllemApiService: ZyllemApiService) {}

  ngOnInit() {
    // Initialize the observable when the component is initialized
    this.featureArticles$ = this.loadFeatureArticles();
  }

  // Define a function that returns an observable of featured articles
  public loadFeatureArticles(): Observable<Article[]> {
    return this.zyllemApiService.getArticles().pipe(
      map(articles => articles.filter(article => article.type === 'FEATURED'))
    );
  }
}
