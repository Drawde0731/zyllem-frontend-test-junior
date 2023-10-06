import { Component, Input, OnInit } from "@angular/core";
import { Article } from "src/app/model/article";

@Component({
  selector: 'article-abstract-component',
  template: '',
})
export abstract class AbstractArticleComponent implements OnInit {
  @Input() articles: Article;

  ngOnInit() {

  }
}
