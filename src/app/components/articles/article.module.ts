import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { articleEntries } from "./article.entries";
import { ArticleRendererComponent } from "./article.renderer.component";
import { ArticleFeatureComponent } from './feature/article.feature/article.feature.component';
import { ArticleNormalComponent } from "./normal";
import { FeatureAdComponent } from "src/app/components/articles/feature-ad/feature-ad.component";
import { ZyllemApiService } from "src/app/app.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...articleEntries,
        ArticleRendererComponent,
        ArticleFeatureComponent,
        ArticleNormalComponent,
        FeatureAdComponent

    ],
    exports: [
        ArticleRendererComponent,
        ...articleEntries
    ],
    providers: [ZyllemApiService],

})
export class ArticleModule { }
