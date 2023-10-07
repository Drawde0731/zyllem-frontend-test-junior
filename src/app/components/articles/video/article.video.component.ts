import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AbstractArticleComponent } from "../abstract.article.component";
import { Article } from "src/app/model/article";
import { ZyllemApiService } from "src/app/app.service";
import { Observable, map } from "rxjs";


@Component({
    selector: 'article-video-component',
    templateUrl: './article.video.component.html',
    styleUrls: ['./article.video.component.scss']
})
export class ArticleVideoComponent extends AbstractArticleComponent implements OnInit {
  article: Article;

  constructor(
    private  domSanitize: DomSanitizer,
    public zyllemApiService: ZyllemApiService
  ) {
    super();
  }

  ngOnInit() {
  }

  // Define a function to load video articles and return an Observable
  loadVideoArticles(): Observable<Article> {
    return this.zyllemApiService.getArticles().pipe(
      map(articles => articles.find(article => article.type === 'VIDEO'))
    );
  }

  get safeVideoUrl() {
    if (this.article) {
      return this.domSanitize.bypassSecurityTrustResourceUrl(this.article.videoUrl);
    }
    return null;
  }
}
