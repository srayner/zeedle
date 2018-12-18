import React from "react";
import { connect } from "react-redux";
import { showProfileMenu, hideProfileMenu, logout } from "../../actions/app";
import Avatar from "../../components/ui/avatar";
import profileMenuData from "../../data/profile-menu";
import PopupMenu from "../ui/popup-menu";

class ProfileNav extends React.Component {
  menuClick = itemId => {
    switch (itemId) {
      case "LOGOUT": {
        this.props.logout();
      }
    }
  };

  componentDidMount() {
    profileMenuData.onItemClick = this.props.onMenuItemClick;
    profileMenuData.onClose = this.props.hideMenu;
    profileMenuData.onItemClick = this.menuClick;
  }

  render() {
    const menu = this.props.menuVisible ? (
      <PopupMenu {...profileMenuData} />
    ) : null;
    const token = localStorage.getItem("token");
    const avatar = token ? (
      <Avatar onClick={this.props.showMenu}>S R</Avatar>
    ) : null;
    return (
      <React.Fragment>
        {avatar}
        {menu}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.app.profileMenuVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showMenu: () => {
      dispatch(showProfileMenu());
    },
    hideMenu: () => {
      dispatch(hideProfileMenu());
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileNav);
