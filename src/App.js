import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Register from "./features/Auth/Register/Register";
import Login from "./features/Auth/Login/Login";
import MyAccount from "./features/MyAccount/MyAccount";
import MyBlog from "./features/MyBlog/MyBlog";
import NewBlog from "./features/NewBlog/NewBlog";
import HomePage from "./Pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound/NotFound";
import { AuthContextProvider } from "./context/googleContext";
import Detail from "./features/Blog/Detail/Detail";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="light-theme">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/contact" element={<NotFound />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-blog" element={<MyBlog />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/article/:id" element={<Detail />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
