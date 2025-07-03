import Main from "./components/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Layout/Landing";
import ProdByCategory from "./pages/ProdByCategory";
import ProdById from "./pages/ProdByİd";
import ProdBySubİd from "./pages/ProdBySubİd";
import ProdByItemId from "./pages/ProdByItemİd";
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
          <Route path="/categories/:id" element={<ProdByCategory />} />
          {/* <Route path="/product/:id" element={<ProdById />} /> */}
          {/* <Route path="/product/subcategory/:id" element={<ProdBySubİd />} /> */}
          {/* <Route path="/product/item/:id" element={<ProdByItemId />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
