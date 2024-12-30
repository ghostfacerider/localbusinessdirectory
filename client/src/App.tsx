import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./pages/Main.tsx";
import SingleListing from "./pages/SingleListing.tsx";
import SignIn from "./pages/SignIn.tsx";
import Register from "./pages/Register.tsx";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import CreateForm from "./pages/CreateForm.tsx";
import Edit from "./pages/Edit.tsx";

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
