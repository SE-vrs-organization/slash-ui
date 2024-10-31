/**
 * PostPage component is responsible for rendering the current product postings.
 * It ensures that only authenticated users can access this page.
 * If the user is not authenticated, it redirects them to the home page.
 *
 * @component
 * @example
 * return (
 *   <PostPage />
 * )
 *
 * @returns {JSX.Element} The rendered component displaying current product postings.
 */
import { useContext, useEffect } from "react";
import CurrentPostings from "../../components/ProductPostings/CurrentPostings";
import { AuthContext } from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);
  return <CurrentPostings />;
};

export default PostPage;
