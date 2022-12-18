import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/ResgisterPage";
import { CartProvider } from "./contexts/CartContext";
import { ProtectionRoute } from "./route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectionRoute />}>
        <Route
          path="/home"
          element={
            <CartProvider>
              <HomePage />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
