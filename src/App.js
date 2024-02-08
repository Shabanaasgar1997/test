// import logo from './logo.svg';
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  let username = " Propose Day!!!";
  let count = 100;
  const Caution = () => {
    // alert("HEY U ACCEPTED");
    window.prompt("how old r u???");
  };
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home virat={username} />} />

        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={
            <Services
              yeshwanth={Caution}
              number={count}
              name="Prasanna B"
              anil={false}
            />
          }
        />

        <Route path="*" element={<PageNotFound />}>
          <Route path=":name" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
