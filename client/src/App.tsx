import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SingleListing from "./pages/SingleListing";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CreateForm from "./pages/CreateForm";
import Edit from "./pages/Edit";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main id="main-content" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single-listing/:id" element={<SingleListing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/create" element={<CreateForm />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
