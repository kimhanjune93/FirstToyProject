import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";

import Item from "./modules/item";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    item : Item,
    router: connectRouter(history),
});

// 미들웨어
// []배열안에 우리가 사용할 내가 사용할 미들웨어를 넣어준다.
// thunk안에 내장되어있는 withExtraArgument(다른 인수를 더 넘겨준다는 뜻)를 사용해 history를 넘겨준다.
const middlewares = [thunk.withExtraArgument({ history: history })];

// NODE_ENV는 지금이 어느 환경인 지 알려주는 것이다. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

// 리덕스 데브툴(redux devTools 설정)
const composeEnhancers =
  // 브라우저일 때만  window === "object"이 부분을 돌려주라고 넣어준것이다. __REDUX_DEVTOOLS_EXTENSION_COMPOSE__부분을 데브툴이 있으면 열어주려고 하는 것이다.
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶어주기
// composeEnhancers를 사용해서 applyMiddleware로 지금까지 있었던 미들웨어를 사용한다는 말이다.
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();