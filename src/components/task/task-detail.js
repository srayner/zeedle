import React from "react";
import { connect } from "react-redux";
import TaskDetailTitle from "./task-detail-title";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { editTaskTitle, saveTask } from "../../actions/task";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Container = styled.div`
  color: #777;
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
  display: flex;
  flex-grow: 1;
`;

const Wrap = styled.div`
  margin: 0 20px;
  line-height: 20px;
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 14px;
`;

const Description = styled.span`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-size: 16px;
`;

class TaskDetail extends React.Component {
  render() {
    const { column, task, onTitleChange, onTitleChanged } = this.props;
    return (
      <Wrapper>
        <Container>
          <FontAwesomeIcon icon={faFile} />
          <Wrap>
            <TaskDetailTitle
              value={task.title}
              onTitleChange={title => onTitleChange(task, title)}
              onBlur={() => onTitleChanged(task)}
            />
            <SubTitle>in list: {column.title}</SubTitle>
          </Wrap>
        </Container>
        <Container>
          <FontAwesomeIcon icon={faAlignLeft} />
          <Wrap>
            <Description>{task.description}</Description>
          </Wrap>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = dispatch => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (task, title) => dispatch(editTaskTitle(task, title)),
    onTitleChanged: task => dispatch(saveTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
