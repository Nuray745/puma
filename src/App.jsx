import Main from "./components/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Layout/Landing";
// import ProdByCategory from "./pages/ProdByCategory";
import ProdById from "./pages/ProdById";
import ProdBySubId from "./pages/ProdBySubId";
import ProdByItemId from "./pages/ProdByItemId";
import { useEffect } from "react";
import scrollToTop from "./utils/scrollToTop";

function App() {
  const { pathname } = useLocation();
  useEffect(() => scrollToTop(), [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Main />} />
          {/* <Route path="/categories/:id" element={<ProdByCategory />} /> */}
          <Route path="/categories/:id" element={<ProdById />} />
          <Route path="/categories/subcategory/:id" element={<ProdBySubId />} />
          <Route
            path="/categories/:categoryId/item/:itemId"
            element={<ProdByItemId />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
