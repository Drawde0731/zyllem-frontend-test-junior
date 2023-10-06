import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../model/article';
import { ZyllemApiService } from '../../../app.service';

@Component({
  selector: 'app-feature-ad',
  templateUrl: './feature-ad.component.html',
  styleUrls: ['./feature-ad.component.css']
})
export class FeatureAdComponent implements OnInit{
  @Input() article: Article;
  articles: Article[] = [];

  constructor(private zyllemApiService: ZyllemApiService) {}

  ngOnInit() {
    this.loadArticles();
  }

  private loadArticles() {
    this.zyllemApiService.getArticles().subscribe(
      (data) => {
        console.log('Received data:', data);
        this.articles = data.filter((article) => article.type === 'FEATURED_AD');
        console.log('Received:', this.articles);
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }
}

