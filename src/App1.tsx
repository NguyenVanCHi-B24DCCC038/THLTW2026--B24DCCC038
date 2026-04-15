import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/TravelApp/Home";
import Plan from "./pages/TravelApp/Plan";
import Budget from "./pages/TravelApp/Budget";
import Admin from "./pages/TravelApp/Admin";
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>Travel App</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/plan">Plan</Link> |{" "}
          <Link to="/budget">Budget</Link> |{" "}
          <Link to="/admin">Admin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}