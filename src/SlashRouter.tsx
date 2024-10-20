import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import PostPage from "./pages/Post/PostPage";
import SearchPage from "./pages/Search/SearchPage";
import WishlistPage from "./pages/Wishlist/WishlistPage";

const SlashRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/sell" element={<PostPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default SlashRouter;
