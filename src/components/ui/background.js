import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${props => {
    return props.colour || "#0079bf";
  }};
`;

class Background extends React.Component {
  render() {
    return (
      <Container colour={this.props.colour}>{this.props.children}</Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    colour: state.board.colour
  };
};

export default connect(
  mapStateToProps,
  null
)(Background);
