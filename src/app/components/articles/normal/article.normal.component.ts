import { Component, Input, OnInit } from "@angular/core";
import { ZyllemApiService } from "src/app/app.service";
import { Article } from "src/app/model/article";

@Component({
  selector: 'article-normal-component',
  templateUrl: './article.normal.component.html'
})
export class ArticleNormalComponent implements OnInit {
  @Input() article: Article;
  articles: Article[] = []; // Define an array to store the fetched articles

  constructor(private zyllemApiService: ZyllemApiService) {}

  ngOnInit() {
    this.loadNormalArticles();
  }

  private loadNormalArticles() {
    this.zyllemApiService.getArticles().subscribe(
      (data) => {
        console.log('Received data:', data); // Check the data here
        // Filter and store only normal articles
        this.articles = data.filter((article) => article.type === 'NORMAL');
        console.log('Received:', this.articles); // Check the data here
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }
}
