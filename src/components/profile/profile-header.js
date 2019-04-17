import React from "react";
import styled from "styled-components";
import Avatar from "../ui/avatar";

const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const NameContainer = styled.div`
  margin-left: 10px;
`;

const DisplayName = styled.h2`
  margin: 0 0 3px 0;
  padding: 0;
  color: black;
  font-size: 24px;
  line-height: 24px;
`;

const Username = styled.h3`
  margin: 0;
  padding: 0;
  color: #777;
  font-size: 14px;
  font-weight: 400;
`;

const ProfileHeader = props => {
  const { fullname, username, initials } = props;
  return (
    <Container>
      <Avatar colour="#2d7aba">{initials}</Avatar>
      <NameContainer>
        <DisplayName>{fullname}</DisplayName>
        <Username>@{username}</Username>
      </NameContainer>
    </Container>
  );
};

export default ProfileHeader;
