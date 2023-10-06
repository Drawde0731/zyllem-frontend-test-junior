import { Type } from "@angular/core";
import { ArticleType } from "src/app/model/article";
import { articleMapper } from "./article.mapper";
import { ArticleNormalComponent } from "./normal/article.normal.component";
import { ArticleFeatureComponent } from './feature/article.feature/article.feature.component';


export const articleEntries: Type<any>[] = [
    ArticleFeatureComponent,
    ArticleNormalComponent
];

const registerArticle = (articleType: ArticleType, component: Type<any>) => {
    if (!articleEntries.includes(component)) {
        throw new Error(`${component} is not yet registered.`);
    }

    if (articleMapper.has(articleType)) {
        throw new Error(`${articleType} articleType already exists.`);
    }

    articleMapper.set(articleType, component);
};

registerArticle(ArticleType.NORMAL, ArticleNormalComponent);
registerArticle(ArticleType.FEATURED, ArticleFeatureComponent);
registerArticle(ArticleType.FEATURED_AD, ArticleFeatureComponent);
