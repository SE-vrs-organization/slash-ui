import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../ContextWrapper";
import "./style.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Alert,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Product {
  title: string;
  price: string;
  link: string;
  website: string;
  img_link: string;
}

const SearchProducts: React.FC = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [product, setProduct] = useState("");
  const [currency, setCurrency] = useState("USD($)");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/search`, {
        params: {
          item_name: product,
          min_price: minPrice,
          max_price: maxPrice,
          currency,
        },
      });

      if (response.data && response.data.length > 0) {
        setResults(response.data);
        setError("");
      } else {
        setResults([]);
        setError("No similar products found.");
      }
    } catch (error) {
      setError("Failed to fetch results. Please try again.");
      console.error("Error fetching search results:", error);
    }
  };

  //Adding the selected items into the wishlist
  const addToWishlist = async (item: Product) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/wishlist`, {
        item,
        username: userData?.username,
      });
      if (response.status === 200) {
        alert("Item added to wishlist successfully!");
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      alert("Failed to add item to wishlist.");
    }
  };

  return (
    <div className="main-container">
      <TextField
        label="Enter product name"
        variant="outlined"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
        data-testid="product-input"
      />
      <FormControl variant="outlined">
        <InputLabel>Currency</InputLabel>
        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          label="Currency"
          data-testid="currency-input"
        >
          <MenuItem value="USD($)">USD($)</MenuItem>
          <MenuItem value="EUR(€)">EUR(€)</MenuItem>
          <MenuItem value="JPY(¥)">JPY(¥)</MenuItem>
          <MenuItem value="INR(₹)">INR(₹)</MenuItem>
          <MenuItem value="GBP(£)">GBP(£)</MenuItem>
          <MenuItem value="AUD($)">AUD($)</MenuItem>
          <MenuItem value="CAD($)">CAD($)</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="number"
        label="Min price"
        variant="outlined"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        data-testid="minprice-input"
      />
      <TextField
        type="number"
        label="Max price"
        variant="outlined"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        data-testid="maxprice-input"
      />
      <Button
        data-testid="search-button"
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>

      {error && <Alert severity="error">{error}</Alert>}

      {results.length > 0 && (
        <div className="results">
          <Typography variant="h5">Product List</Typography>
          <List>
            {results.map((result, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={result.img_link} alt={result.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={result.title}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        Price: {result.price}
                      </Typography>
                      <br />
                      <Link to={result.link} target="_blank" rel="noopener">
                        View Product
                      </Link>
                      <br />
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => addToWishlist(result)}
                      >
                        Add to Wishlist
                      </Button>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
