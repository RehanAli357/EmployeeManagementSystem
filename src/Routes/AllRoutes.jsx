import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";

const TopLevel = lazy(()=>import("../Pages/TopLevel"));
const MidLevel = lazy(()=>import("../Pages/MidLevel"));
const LowLevel = lazy(()=>import("../Pages/LowLevel"));

const AllRoutes = () => {

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/TopLevel" element={<TopLevel />} />
        <Route path="/MidLevel" element={<MidLevel />} />
        <Route path="/LowLevel" element={<LowLevel />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
