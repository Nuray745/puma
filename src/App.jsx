import Main from "./components/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Layout/Landing";
import ProdById from "./pages/ProdById";
import ProdBySubId from "./pages/ProdBySubId";
import ProdByItemId from "./pages/ProdByItemId";
import Detail from "./pages/Detail";
import { useEffect } from "react";
import scrollToTop from "./utils/scrollToTop";
import Basket from "./pages/Basket";
import { Toaster } from "react-hot-toast";
import Wishlist from "./pages/Wishlist";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Error404 from "./pages/error/Error404";
import UserPage from "./user/userPage";
import VerifyUser from "./auth/VerifyUser";
import UserLayout from "./Layout/UserLayout";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Main />} />
          <Route path="/categories/:id" element={<ProdById />} />
          <Route path="/categories/subcategory/:id" element={<ProdBySubId />} />
          <Route
            path="/categories/:categoryId/item/:itemId"
            element={<ProdByItemId />}
          />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Register />} />
        </Route>
        <Route path="/user" element={<VerifyUser />}>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<UserPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
