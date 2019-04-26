import React from "react";
import { connect } from "react-redux";
import { showProfileMenu, hideProfileMenu, logout } from "../../actions/app";
import Avatar from "../../components/ui/avatar";
import profileMenuData from "../../data/profile-menu";
import PopupMenu from "../ui/popup-menu";
import { withRouter } from "react-router";
import profileMenu from "../../data/profile-menu";

class ProfileNav extends React.Component {
  menuClick = itemId => {
    switch (itemId) {
      case "PROFILE": {
        this.props.history.push("/profile");
        this.props.hideMenu();
        break;
      }
      case "LOGOUT": {
        this.props.logout();
        break;
      }
      default: {
      }
    }
  };

  componentDidMount() {
    profileMenu.title =
      this.props.user.fullname + " (" + this.props.user.username + ")";
    profileMenuData.onItemClick = this.props.onMenuItemClick;
    profileMenuData.onClose = this.props.hideMenu;
    profileMenuData.onItemClick = this.menuClick;
  }

  render() {
    const { menuVisible, token, showMenu, user } = this.props;
    const menu = menuVisible ? <PopupMenu {...profileMenuData} /> : null;
    const avatar = token ? (
      <Avatar onClick={showMenu}>{user.initials}</Avatar>
    ) : null;
    return (
      <React.Fragment>
        {avatar}
        {menu}
      </React.Fragment>
    );
  }
}

const ProfileNavWithRouter = withRouter(ProfileNav);

const mapStateToProps = state => {
  return {
    token: state.user.token,
    menuVisible: state.app.profileMenuVisible,
    user: state.user
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
)(ProfileNavWithRouter);
