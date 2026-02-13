import { lazy, Suspense, type ComponentType } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/page";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout route */}
      
        <Route path="/" element={<Home/>} />

    </Routes>
  );
}
