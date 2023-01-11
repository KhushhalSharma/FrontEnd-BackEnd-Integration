import "./App.css";
import Navbar from "./Components/Navbar";
import MyCartItems from "./Pages/MyCartItems";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./Hoc/RequiredAuth";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={
            <RequiredAuth>
              <MyCartItems />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
