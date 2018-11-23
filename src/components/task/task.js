import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { startEditTask } from "../../actions/card-actions";
import { connect } from "react-redux";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgray" : "white")};
  display: flex;
`;

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            onClick={() => {
              this.props.clickHandler(this.props.task);
            }}
          >
            {this.props.task.title}
          </Container>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: task => dispatch(startEditTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
