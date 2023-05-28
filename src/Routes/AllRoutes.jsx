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
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/TopLevel" element={<TopLevel />} />
        <Route exact path="/MidLevel" element={<MidLevel />} />
        <Route exact path="/LowLevel" element={<LowLevel />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
