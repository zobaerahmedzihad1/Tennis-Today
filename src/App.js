import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Features from "./Pages/Features/Features";
import Home from "./Pages/Home/Home/Home";
import Programs from "./Pages/Programs/Programs";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Shared/Login/Login";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Register from "./Pages/Shared/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element ={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
