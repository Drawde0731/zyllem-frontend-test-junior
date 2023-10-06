import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZyllemApiService } from './app.service';

import { ArticleVideoComponent } from './components/articles/video/article.video.component';
import { ArticleModule } from './components/articles/article.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticleVideoComponent,

  ],
  imports: [
    BrowserModule,
    ArticleModule
  ],
  providers: [ZyllemApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


