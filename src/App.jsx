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
import BasketContext from "./contexts/BasketContext";
import WishlistContext from "./contexts/WishlistContext";
import Wishlist from "./pages/Wishlist";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <WishlistContext>
      <BasketContext>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/" element={<Main />} />
            <Route path="/categories/:id" element={<ProdById />} />
            <Route
              path="/categories/subcategory/:id"
              element={<ProdBySubId />}
            />
            <Route
              path="/categories/:categoryId/item/:itemId"
              element={<ProdByItemId />}
            />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BasketContext>
    </WishlistContext>
  );
}

export default App;
