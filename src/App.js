import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar count={count} />
      <Header />
      <Products setCount={setCount} />
      <Footer />
    </div>
  );
}

export default App;
