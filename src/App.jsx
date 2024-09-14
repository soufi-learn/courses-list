import { Route, Routes } from "react-router-dom";
import CoursesList from "./components/pages/CoursesList";
import RegisterForm from "./components/pages/LoginForm";
import VerifyForm from "./components/pages/VerifyForm";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CoursesList />} />
        <Route path="login" element={<RegisterForm />} />
        <Route path="verify" element={<VerifyForm />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
