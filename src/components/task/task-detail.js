import React from "react";
import { connect } from "react-redux";
import TextDynamicArea from "../ui/text-dynamic-area";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  editTaskTitle,
  editTaskDescription,
  saveTask
} from "../../actions/task";

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

class TaskDetail extends React.Component {
  render() {
    const {
      list,
      task,
      onTitleChange,
      onDescriptionChange,
      onTaskModified
    } = this.props;
    return (
      <Wrapper>
        <Container>
          <FontAwesomeIcon icon={faFile} />
          <Wrap>
            <TextDynamicArea
              fontSize="20px"
              lineHeight="24px"
              value={task.title}
              onChange={title => onTitleChange(task, title)}
              onBlur={() => onTaskModified(task)}
            />
            <SubTitle>in list: {list.title}</SubTitle>
          </Wrap>
        </Container>
        <Container>
          <FontAwesomeIcon icon={faAlignLeft} />
          <Wrap>
            <TextDynamicArea
              fontSize="14px"
              lineHeight="18px"
              value={task.description}
              onChange={description => onDescriptionChange(task, description)}
              onBlur={() => onTaskModified(task)}
              placeholder="Add a more detailed description..."
            />
          </Wrap>
        </Container>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (task, title) => dispatch(editTaskTitle(task, title)),
    onDescriptionChange: (task, description) =>
      dispatch(editTaskDescription(task, description)),
    onTaskModified: task => dispatch(saveTask(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TaskDetail);
