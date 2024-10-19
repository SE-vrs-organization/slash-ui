import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../ContextWrapper";

const Navigation = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const logout = () => {
    setUserData(undefined);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/search" color="inherit">
              Search
            </Button>
            <Button component={Link} to="/wishlist" color="inherit">
              Wishlist
            </Button>
            <Button component={Link} to="/sell" color="inherit">
              Sell
            </Button>
          </Box>
        </Typography>
        {userData ? (
          <React.Fragment>
            <Typography
              color="textPrimary"
              variant="overline"
              component="div"
              fontStyle="italic"
            >
              logged in as: {userData.username}
            </Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </React.Fragment>
        ) : (
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
