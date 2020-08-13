import { Reducer } from "react";

export interface Action<T> {
  type: T;
}

export type ReducersMapObject<S, A extends Action<T>, T> = {
  [K in keyof S]: Reducer<S[K], A>;
};

export const combineReducers = <
  S,
  A extends Action<T>,
  T = A extends Action<infer T> ? T : never,
>(
  reducers: ReducersMapObject<S, A, T>,
): Reducer<S, A> => {
  const keys = Object.keys(
    reducers,
  ) as (keyof S)[];
  return (
    state: S,
    action: A,
  ): S => {
    let isDirty = false;
    const nextState = {} as S;
    for (const key of keys) {
      const partialReducer = reducers[key];
      const partialState = state[key];
      const partialNextState = partialReducer(partialState, action);

      nextState[key] = partialNextState;
      isDirty = isDirty || partialState != partialNextState;
    }
    return isDirty ? nextState : state;
  };
};
