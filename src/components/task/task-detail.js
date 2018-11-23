import React from "react";
import { connect } from "react-redux";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  color: #777;
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
  display: flex;
`;

const Wrap = styled.div`
  margin: 0 20px;
  line-height: 20px;
`;

const Title = styled.span`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
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
    return (
      <React.Fragment>
        <Container>
          <FontAwesomeIcon icon={faFile} />
          <Wrap>
            <Title>{this.props.task.title}</Title>
            <SubTitle>in list: {this.props.column.title}</SubTitle>
          </Wrap>
        </Container>
        <Container>
          <FontAwesomeIcon icon={faAlignLeft} />
          <Wrap>
            <Description>{this.props.task.description}</Description>
          </Wrap>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
