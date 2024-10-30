import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext, UserData } from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res: any) => {
        if (res.data.content.status === "success") {
          console.log("Login successful!");
          setUserData(res.data.content.data as UserData);
          navigate("/search");
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 65px)", // Adjust the height to account for the navbar
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "2.3rem", color: "#888", textAlign: "center" }}
      >
        Welcome Back
      </Typography>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          data-testid="username-input"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-testid="password-input"
        />
        <Button
          variant="contained"
          data-testid="login-button"
          color="primary"
          type="submit"
          style={{ marginTop: "16px" }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
