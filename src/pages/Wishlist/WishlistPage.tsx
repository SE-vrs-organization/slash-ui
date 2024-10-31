/**
 * WishlistPage component
 *
 * This component represents the Wishlist page of the application.
 * It uses the `AuthContext` to check if the user is authenticated.
 * If the user is not authenticated, it redirects to the home page.
 *
 * @component
 *
 * @example
 * return (
 *   <WishlistPage />
 * )
 *
 * @returns {JSX.Element} The rendered Wishlist component.
 *
 * @remarks
 * This component uses the `useContext` hook to access the `AuthContext` and
 * the `useNavigate` hook from `react-router-dom` to handle navigation.
 *
 * @see {@link AuthContext}
 * @see {@link useNavigate}
 * @see {@link Wishlist}
 */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextWrapper";
import Wishlist from "../../components/Wishlist/WishlistProduct";

const WishlistPage = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);
  return <Wishlist />;
};

export default WishlistPage;
