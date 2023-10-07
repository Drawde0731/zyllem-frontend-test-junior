import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../model/article';
import { ZyllemApiService } from '../../../app.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-feature-ad',
  templateUrl: './feature-ad.component.html',
  styleUrls: ['./feature-ad.component.css']
})
export class FeatureAdComponent implements OnInit {
  @Input() article: Article;
  featureAdArticles$: Observable<Article[]>;

  constructor(public zyllemApiService: ZyllemApiService) {}

  ngOnInit() {
    // Initialize the observable when the component is initialized
    this.featureAdArticles$ = this.loadFeatureAdArticles();
  }

  // Define a function to load feature ad articles and return an Observable
  public loadFeatureAdArticles(): Observable<Article[]> {
    return this.zyllemApiService.getArticles().pipe(
      map(articles => articles.filter(article => article.type === 'FEATURED_AD'))
    );
  }
}
