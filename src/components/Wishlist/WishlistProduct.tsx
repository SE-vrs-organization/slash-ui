import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { AuthContext } from "../../ContextWrapper";
import {
  Container,
  Typography,
  Alert,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

interface WishlistItem {
  id: number;
  title: string;
  price: string;
  link: string;
  website: string;
  img_link: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const { userData } = useContext(AuthContext);
  const [error, setError] = useState("");

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/wishlist/${userData?.username}`
      );
      if (response.data) {
        setWishlist(response.data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch wishlist items. Please try again.");
      console.error("Error fetching wishlist:", error);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/wishlist/${id}`);
      // Update the state to remove the item from the list
      alert("item removed from wishlist");
      fetchWishlist();
    } catch (error) {
      setError("Failed to remove item from wishlist. Please try again.");
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  return (
    <Container className="wishlist-container">
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>
      {error && (
        <Alert severity="error" className="error">
          {error}
        </Alert>
      )}
      {wishlist.length > 0 ? (
        <List>
          {wishlist.map((item) => (
            <ListItem key={item.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={item.img_link} alt={item.title} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Price: {item.price}
                    </Typography>
                    <br />
                    <Link
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Product
                    </Link>
                  </>
                }
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemove(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No items in the wishlist.</Typography>
      )}
    </Container>
  );
};

export default Wishlist;
