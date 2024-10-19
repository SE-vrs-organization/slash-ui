import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container
      sx={{
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 65px)", // Adjust the height to account for the navbar
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "4rem", color: "#888", textAlign: "center" }}
      >
        Welcome to Slash
      </Typography>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography>
          <Link to="/search">Search</Link>- Find your desired items.
        </Typography>
        <Typography>
          <Link to="/wishlist">Wishlist</Link> - View and manage your wishlist.
        </Typography>
        <Typography>
          <Link to="/sell">Sell</Link> - List your items for sale.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
