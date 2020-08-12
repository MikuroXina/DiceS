import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";

import { reducer } from "./reducer";
import { logger } from "./middlewares/logger";

const makeStore = () => createStore(reducer, applyMiddleware(logger));

export const wrapper = createWrapper(makeStore);
