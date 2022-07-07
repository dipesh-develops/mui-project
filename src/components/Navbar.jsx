import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Avatar,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notification from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography varient="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Dipesh
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notification />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          />
          <Typography variant="span">Dipesh</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};
