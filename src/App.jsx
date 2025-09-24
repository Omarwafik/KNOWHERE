// App.js
import "./App.css";
import "./index.css";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Components (اللي صغير وبيستخدم دايمًا نخليه عادي)
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Value from "./Components/Value/Value";
import bg from "./assets/images/download1.jpeg";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Login from "./Components/Login/Login";
import { UserProvider } from "./Components/Context/UserContext";
import SignUp from "./Components/SignUp/SignUp";
import Loading from "./Components/Loading/Loading";
// // ✅ Lazy load للصفحات الكبيرة
const Rooms = lazy(() => import("./Components/Rooms/Rooms"));

function Layout() {
  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/KNOWHERE">
      <ScrollToTop />
      {/* ✅ Suspense بيغطي كل الـ Routes */}
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<Value />} /> */}
            {/* ✅ Suspense لصفحة Rooms بس */}
            <Route
              path="/rooms/:category"
              element={
                <Suspense fallback={<Loading />}>
                  <div
                    className=""
                    style={{
                      backgroundImage: `url(${bg})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <Rooms />
                  </div>
                </Suspense>
              }
            />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
