import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/ResgisterPage";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={
          <ModalProvider>
            <HomePage />
          </ModalProvider>
        }
      />
    </Routes>
  );
}

export default App;
