import { Component, Input, OnInit } from '@angular/core';
import { AbstractArticleComponent } from '../../abstract.article.component';
import { Article, NormalArticle } from "src/app/model/article";
import { ZyllemApiService } from 'src/app/app.service';

@Component({
  selector: 'app-article-feature',
  templateUrl: './article.feature.component.html',
  styleUrls: ['./article.feature.component.css']
})
export class ArticleFeatureComponent implements OnInit{
  @Input() article: Article;
  articles: Article[] = []; // Define an array to store the fetched articles

  constructor(private zyllemApiService: ZyllemApiService) {}

  ngOnInit() {
    this.loadFeatureArticles();
  }

  private loadFeatureArticles() {
    this.zyllemApiService.getArticles().subscribe(
      (data) => {
        console.log('Received data:', data);
        this.articles = data.filter((article) => article.type === 'FEATURED');
        console.log('Received:', this.articles);
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }
}
