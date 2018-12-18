import React from "react";
import { connect } from "react-redux";
import { showProfileMenu, hideProfileMenu } from "../../actions/app";
import Avatar from "../../components/ui/avatar";

class ProfileNav extends React.Component {
  render() {
    const token = localStorage.getItem("token");
    const avatar = token ? <Avatar>S R</Avatar> : null;
    return <React.Fragment>{avatar}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.app.profileMenuVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showMenu: dispatch(showProfileMenu()),
    hideMenu: dispatch(hideProfileMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileNav);
