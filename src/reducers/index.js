import categoryReducer from './categories.reducer';
import { combineReducers } from 'redux';
import sidegridReducer from './sidegrid.reducer';
import articleReducer from './article.reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    sidegrids: sidegridReducer,
    article: articleReducer
});

export default rootReducer;