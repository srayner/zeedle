import React from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "@atlaskit/css-reset";
import initialData from "./initial-data";
import Column from "./column";
import EditCard from "./Component/EditCard";
import "./index.css";

import store from "./store";
import { Provider } from "react-redux";

const TitleBar = styled.div`
  background-color: #205785;
  padding: 8px;
  font-size: 24px;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
`;

const Board = styled.h2`
  margin: 0;
  padding: 8px;
  color: white;
  font-weight: 400;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

class App extends React.Component {
  state = initialData;

  onAddNewCardClick = () => {};

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
