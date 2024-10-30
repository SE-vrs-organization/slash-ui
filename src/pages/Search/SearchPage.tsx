import { useContext, useEffect } from "react";
import SearchPg from "../../components/SearchPage/SearchProduct";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextWrapper";

const SearchPage = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  return <SearchPg />;
};

export default SearchPage;
