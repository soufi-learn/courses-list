import { Route, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import RegisterForm from "./components/RegisterForm";
import VerifyForm from "./components/VerifyForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="verify" element={<VerifyForm />} />
    </Routes>
  );
}

export default App;
