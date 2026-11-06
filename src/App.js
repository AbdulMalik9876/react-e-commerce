import Navbar from "./Asserts/Pages/Navbar";
import Categories from "./Asserts/Pages/Home/Categories";
import HeroSection from "./Asserts/Pages/Home/HeroSection";
import Services from "./Asserts/Pages/Home/Services";
import AboutUs from './Asserts/Pages/AboutUs';
import SignUpPage from './Asserts/Pages/SignUpPage';
import Admin from './Asserts/Pages/AdminPage';
import Login from './Asserts/Pages/Login';
import MYFooter from './Asserts/Pages/MYFooter';

import { Navigate, Route, Routes } from "react-router-dom";
import { getRole } from "./auth";
import ProductPage from "./Asserts/Pages/ProductPage";
// import Display from "./Asserts/Pages/Home/Display";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<>
          <Categories />
          <HeroSection />
          <Services />
          {/* <ProductPage /> */}
          {/* <Display /> */}
        </>}
        />
        <Route exact path="about" element={<>
          <AboutUs />
        </>}
        />

        <Route exact path="product" element={<>
          <ProductPage />
        </>}
        />

        <Route exact path="admin" element={getRole() === "admin" ? <>
          <HeroSection />
          <Admin />
        </> : <Navigate to="/login" replace />}
        />

        <Route exact path="/login" element={<>
          <Login />
        </>}
        />

        <Route exact path="signup" element={<>
          <SignUpPage />
        </>}
        />
      </Routes>
      <MYFooter />
    </>

  );
}

export default App;


