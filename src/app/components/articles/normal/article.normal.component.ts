import { Component, Input, OnInit } from "@angular/core";
import { ZyllemApiService } from "src/app/app.service";
import { Article } from "src/app/model/article";
import { Observable, map } from 'rxjs';

@Component({
  selector: 'article-normal-component',
  templateUrl: './article.normal.component.html'
})
export class ArticleNormalComponent implements OnInit {
  @Input() article: Article;
  normalArticles$: Observable<Article[]>; // Define an Observable to store the fetched 'NORMAL' articles

  constructor(private zyllemApiService: ZyllemApiService) {}

  ngOnInit() {
    this.normalArticles$ = this.loadNormalArticles();
  }

  public loadNormalArticles(): Observable<Article[]> {
    return this.zyllemApiService.getArticles()
      .pipe(
        map(data => data.filter(article => article.type === 'NORMAL'))
      );
  }
}
