import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
