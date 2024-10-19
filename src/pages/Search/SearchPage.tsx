import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextWrapper";

const SearchPage = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);
  return <div>SearchPage</div>;
};

export default SearchPage;
