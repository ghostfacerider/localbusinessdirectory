import {
  NavBar,
  Footer,
  // Newsletter,
  ProtectedRoutes,
  SignIn,
  Register,
} from "../oomponents/index";

import Main from "./Pages/Main";
// import Edit from "./components/Edit";
// import CreateForm from "./components/CreateForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              {/* <Route path="/create" element={<CreateForm />} />
              <Route path="/edit/:id" element={<Edit />} /> */}
            </Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
