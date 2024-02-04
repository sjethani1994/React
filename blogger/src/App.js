import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
