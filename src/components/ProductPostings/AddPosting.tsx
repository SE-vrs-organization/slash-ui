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

  const { userData, setUserData } = useContext(AuthContext);

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
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        type="number"
      />
      <TextField
        select
        label="Currency"
        name="currency"
        value={formData.currency}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="GBP">GBP</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default AddPosting;
