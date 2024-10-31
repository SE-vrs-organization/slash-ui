/**
 * AddPosting component allows users to create a new product posting.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.newPostingCallback - Callback function to be called after a new posting is successfully added
 *
 * @returns {JSX.Element} The rendered AddPosting component
 *
 * @example
 * <AddPosting newPostingCallback={handleNewPosting} />
 *
 * @remarks
 * This component uses the AuthContext to get the current user's data and axios to send a POST request to the server.
 * It includes form fields for the product name, description, price, and currency.
 *
 * @requires AuthContext - Context to get the current user's data
 * @requires axios - Library to make HTTP requests
 * @requires @mui/material - Material-UI components
 */
import React, { useContext, useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../../ContextWrapper";

const AddPosting = ({
  newPostingCallback,
}: {
  newPostingCallback: () => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currency: "",
  });

  const { userData } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add-posting", {
        ...formData,
        username: userData?.username,
      })
      .then((res) => {
        alert("product posted successfully");
        newPostingCallback();
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        data-testid="name-input"
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        data-testid="description-input"
      />
      <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        type="number"
        data-testid="price-input"
      />
      <TextField
        select
        label="Currency"
        name="currency"
        value={formData.currency}
        onChange={handleChange}
        fullWidth
        margin="normal"
        data-testid="currency-input"
      >
        <MenuItem data-testid="currency-USD" value="USD">
          USD
        </MenuItem>
        <MenuItem data-testid="currency-EUR" value="EUR">
          EUR
        </MenuItem>
        <MenuItem data-testid="currency-GBP" value="GBP">
          GBP
        </MenuItem>
      </TextField>
      <Button
        data-testid="submit-button"
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default AddPosting;
