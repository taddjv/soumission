import Header from "./components/Header";
import Banner from "./components/Banner";
import Propos from "./components/Propos";
import Products from "./components/Products";
import Infos from "./components/Infos";
import Footer from "./components/Footer";
import background from "./assets/family.jpg";
import Form from "./components/Form";
import data from "./assets/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 -100px", "0 400px"]
  );
  window.onresize = function () {
    document.body.height = window.innerHeight;
  };
  window.onresize(); // called to initially set the height.

  return (
    <>
      
      <div className="App">
        <AnimatePresence mode="wait">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <motion.div
                      className="background"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img
                        style={{ objectPosition }}
                        src={background}
                        alt="background"
                        className="back-image"
                      />
                    </motion.div>
                    <Banner />
                    <Propos />
                    <Products />

                    <Infos />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/assurance-vie"
                element={
                  <>
                    <Header />
                    <Form data={data.vie} />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/assurance-invalidite"
                element={
                  <>
                    <Header />
                    <Form data={data.invalidite} />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/assurance-maladie-grave"
                element={
                  <>
                    <Header />
                    <Form data={data.maladie} />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </Router>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
