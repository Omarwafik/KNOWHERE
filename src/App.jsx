// App.js
import "./App.css";
import "./index.css";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Components (اللي صغير وبيستخدم دايمًا نخليه عادي)
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Login from "./Components/Login/Login";
import { UserProvider } from "./Components/Context/UserContext";
import SignUp from "./Components/SignUp/SignUp";
import Loading from "./Components/Loading/Loading";
import RoomDetails from "./Components/RoomDetails/RoomDetails";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
// // ✅ Lazy load للصفحات الكبيرة
const Rooms = lazy(() => import("./Components/Rooms/Rooms"));

function Layout() {
  return (
    <>
  <Helmet>
  <title>Knowhere – Find Your Perfect Workspace in New Cairo</title>
  <meta
    name="description"
    content="Explore coworking spaces, private offices, and meeting rooms at Knowhere. Designed for freelancers, startups, and teams looking for flexible workspaces in New Cairo."
  />
  <meta
    name="keywords"
    content="coworking Egypt, coworking space Cairo, shared office Egypt, meeting rooms Cairo, private offices Egypt, Knowhere workspace"
  />
  <link rel="canonical" href="https://knowhere-eg.com/" />

  {/* OG & Twitter */}
  <meta property="og:title" content="Knowhere – Find Your Perfect Workspace" />
  <meta property="og:description" content="Discover coworking spaces, private offices, and meeting rooms at Knowhere in New Cairo." />
  <meta property="og:image" content="https://knowhere-eg.com/assets/images/Logo.jpg" />
  <meta property="og:url" content="https://knowhere-eg.com/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

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
    <BrowserRouter>
      <Toaster position="top-right"/>
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
              path="/:category"
              element={
                <Suspense fallback={<Loading />}>
                  <Rooms />
                </Suspense>
              }
            />
            <Route
              path="/:category/:roomName"
              element={
                <Suspense fallback={<Loading />}>
                  <RoomDetails />
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
