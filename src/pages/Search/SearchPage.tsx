/**
 * SearchPage component that renders the SearchPg component.
 *
 * This component checks if the user is authenticated by using the AuthContext.
 * If the user is not authenticated, it redirects to the home page.
 *
 * @component
 * @example
 * return (
 *   <SearchPage />
 * )
 *
 * @returns {JSX.Element} The rendered SearchPg component.
 */
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
