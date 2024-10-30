// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import PostPage from "./pages/Post/PostPage";
import SearchPage from "./pages/Search/SearchPage";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import RegisterPage from "./pages/Register/RegisterPage";

const SlashRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/sell" element={<PostPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default SlashRouter;
