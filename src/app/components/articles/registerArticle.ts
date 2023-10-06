import { Component, Input } from "@angular/core";
import { ZyllemApiService } from "src/app/app.service";
import { AbstractArticleComponent } from "./abstract.article.component";
import { Article } from "src/app/model/article";


@Component({
  selector: 'article-normal-component',
  templateUrl: './normal/article.normal.component.html',
})
export class ArticleNormalComponent extends AbstractArticleComponent {
  @Input() article: Article;

  constructor(protected zyllemApiService: ZyllemApiService) {
    super();
  }
}
