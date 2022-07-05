import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Chart from "./Chart";
import Intro from "./Intro/Intro";

const RoutesTree = () => {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="theproduct" />}
          ></Route>
          <Route path="intro" element={<Intro />} />
          <Route path="theproduct" element={<Chart />} />
        </Routes>
      </div>
    )
}

export default RoutesTree