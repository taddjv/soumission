import Header from "./components/Header";
import Banner from "./components/Banner";
import Propos from "./components/Propos";
import Products from "./components/Products";
import Infos from "./components/Infos";
import Footer from "./components/Footer";
import background from "./assets/family.jpg";
import Form from "./components/Form";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 -100px", "0 400px"]
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <div className="background">
            <motion.img
              style={{ objectPosition }}
              src={background}
              alt="background"
              className="back-image"
            />
          </div>
          <Banner />
          <Propos />
          <Products />
          <Infos />
        </>
      ),
    },
    {
      path: "/assurance-vie",
      element: (
        <>
          <Header />
          <Form />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
