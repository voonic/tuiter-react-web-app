import React from "react";
import HelloReduxExampleComponent
  from "./hello-redux-example-component";
import todos from "./reducers/todos-reducer";
import hello from "./reducers/hello";
import { configureStore }
  from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import Todos from "./todos-component";
const store = configureStore({
  reducer: { hello, todos }
});


const ReduxExamples = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <Todos />
        <HelloReduxExampleComponent />
      </div>
    </Provider>
  );
};
export default ReduxExamples;