import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Navigation = () => {
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
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/logout" color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
