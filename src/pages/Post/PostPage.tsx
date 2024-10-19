import React, { useContext, useEffect } from "react";
import CurrentPostings from "../../components/ProductPostings/CurrentPostings";
import { AuthContext } from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);
  return <CurrentPostings />;
};

export default PostPage;
