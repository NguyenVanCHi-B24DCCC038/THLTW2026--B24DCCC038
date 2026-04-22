import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blogApp/Home";
import Detail from "./pages/blogApp/Detail";
import ManagePosts from "./pages/blogApp/ManagePosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/admin/posts" element={<ManagePosts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;