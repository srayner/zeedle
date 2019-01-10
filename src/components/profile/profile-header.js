import React from "react";
import styled from "styled-components";
import Avatar from "../ui/avatar";

const Container = styled.div``;
const ProfileHeader = props => {
  const { displayName, username, initials } = props;
  return (
    <Container>
      <Avatar>{initials}</Avatar>
      <h2>{displayName}</h2>
      <h3>{username}</h3>
    </Container>
  );
};

export default ProfileHeader;
