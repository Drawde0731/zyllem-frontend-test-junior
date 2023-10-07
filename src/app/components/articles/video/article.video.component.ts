import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AbstractArticleComponent } from "../abstract.article.component";
import { Article } from "src/app/model/article";
import { ZyllemApiService } from "src/app/app.service";


@Component({
    selector: 'article-video-component',
    templateUrl: './article.video.component.html',
    styleUrls: ['./article.video.component.scss']
})
export class ArticleVideoComponent extends AbstractArticleComponent implements OnInit {

    article: Article;

    constructor(
        private readonly domSanitize: DomSanitizer,
        private readonly zyllemApiService: ZyllemApiService
    ) {
        super();
    }

    ngOnInit() {
        this.loadVideoArticles();
    }

    private loadVideoArticles() {
      this.zyllemApiService.getArticles().subscribe(articles => {

        const videoArticle = articles.find(article => article.type === 'VIDEO');


        if (videoArticle) {
            this.article = videoArticle;
        }
    });
    }

    get safeVideoUrl() {
        if (this.article) {
            return this.domSanitize.bypassSecurityTrustResourceUrl(this.article.videoUrl);
        }
        return null;
    }
}
