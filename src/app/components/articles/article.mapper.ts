import { Type } from "@angular/core";
import { ArticleType } from "src/app/model/article";
import { ArticleNormalComponent } from "./normal";
import { ArticleFeatureComponent } from "./feature/article.feature/article.feature.component";
import { FeatureAdComponent } from "./feature-ad/feature-ad.component";
import { ArticleVideoComponent } from "./video/article.video.component";

export const articleMapper = new Map<ArticleType, Type<ArticleNormalComponent>>();
// export const articleMapper = new Map<ArticleType, Type<ArticleFeatureComponent>>();
// export const articleMapper = new Map<ArticleType, Type<FeatureAdComponent>>();
// export const articleMapper = new Map<ArticleType, Type<ArticleVideoComponent>>();

