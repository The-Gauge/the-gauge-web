import categoryReducer from './categories.reducer';
import { combineReducers } from 'redux';
import sidegridReducer from './sidegrid.reducer';
import articleReducer from './article.reducer';
import bannerReducer from './banner.reducer';
import featuredReducer from './featured.reducer';
import articlesReducer from './articles.reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    sidegrids: sidegridReducer,
    article: articleReducer,
    banner: bannerReducer,
    featured: featuredReducer,
    articles: articlesReducer
});

export default rootReducer;