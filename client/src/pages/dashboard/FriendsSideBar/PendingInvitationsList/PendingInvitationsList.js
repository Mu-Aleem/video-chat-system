import React from "react";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
// const DUMMY_INVITATIONS = [
//   {
//     _id: "1",
//     senderId: {
//       username: "Mark",
//       mail: "dummy@ad.com",
//     },
//   },
//   {
//     _id: "2",
//     senderId: {
//       username: "John",
//       mail: "John@ad.com",
//     },
//   },
// ];

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
  },
}));

const PendingInvitationsList = () => {
  const classes = useStyles();

  const pendingFriendsInvitations = useSelector(
    (state) => state.Friends.pendingFriendsInvitations
  );

  return (
    <Box className={classes.maincontainer}>
      {pendingFriendsInvitations?.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </Box>
  );
};

export default PendingInvitationsList;
