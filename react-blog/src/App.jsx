import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetails />} />

    </Routes>
  );
}
