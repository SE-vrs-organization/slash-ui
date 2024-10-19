import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import axios from "axios";
import { AuthContext } from "../../ContextWrapper";
import AddIcon from "@mui/icons-material/Add";
import AddPosting from "./AddPosting";
import CloseIcon from "@mui/icons-material/Close";

type ProductPosting = {
  name: String;
  date_posted: String;
  description: String;
  price: String;
  currency: String;
  sold: boolean;
  posted_by: String;
};

const CurrentPostings = () => {
  const [postings, setPostings] = useState<ProductPosting[]>([]);
  const { userData, setUserData } = useContext(AuthContext);
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    if (!userData) {
      return;
    }
    getPostings();
  }, [userData]);

  const getPostings = () => {
    axios
      .get(`http://localhost:5000/postings/${userData?.username}`)
      .then((res) => {
        setPostings(res.data.content.data);
      });
  };
  const addProduct = () => {
    setShowAddProduct(true);
  };

  const newPostingCallback = () => {
    getPostings();
  };

  return (
    <Container>
      {showAddProduct ? (
        <React.Fragment>
          <Button
            onClick={() => setShowAddProduct(false)}
            style={{ float: "right" }}
          >
            <CloseIcon />
          </Button>
          <AddPosting newPostingCallback={newPostingCallback} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant="h4" gutterBottom align="center">
            Current Postings
          </Typography>
          <Button
            size="small"
            variant="contained"
            onClick={addProduct}
            style={{ float: "right" }}
          >
            <AddIcon /> POst New Product
          </Button>
          <List style={{ marginTop: "40px" }}>
            {postings.length === 0 && (
              <Typography variant="body1" color="textSecondary">
                You do not have any postings currently. Click here to{" "}
                <Button size="small" variant="contained" onClick={addProduct}>
                  <AddIcon /> Add one
                </Button>
                .
              </Typography>
            )}
            {postings.map((posting, index) => (
              <Paper
                key={index}
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  backgroundColor: posting.sold === true ? "#e0e0e0" : "white",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={posting.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {posting.description}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="body2"
                          color="textSecondary"
                        >
                          {posting.price}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textSecondary"
                        >
                          &nbsp;{posting.currency}
                        </Typography>
                        {posting?.sold && (
                          <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                            style={{ float: "right" }}
                          >
                            SOLD OUT
                          </Typography>
                        )}
                      </>
                    }
                  />
                </ListItem>
              </Paper>
            ))}
          </List>
        </React.Fragment>
      )}
    </Container>
  );
};

export default CurrentPostings;
