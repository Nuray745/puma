import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BasketContext from "./contexts/BasketContext.jsx";
import WishlistContext from "./contexts/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <WishlistContext>
    <BasketContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketContext>
  </WishlistContext>
);
