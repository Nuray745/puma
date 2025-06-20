import Main from "./components/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Layout/Landing";
import ProdByCategory from "./pages/prodByCategory";
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
          <Route path="/categories/:slug/*" element={<ProdByCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
