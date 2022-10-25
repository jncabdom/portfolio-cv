import styled from "@emotion/styled";
import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "../../pages/Home/Home";

const MainApp = styled.div`
display: flex;
margin: 0;
`;

const PageRoutes = [
  { path: "/", element: Home },
  { path: "About", element: Home },
  { path: "Project", element: Home },
  { path: "Stack", element: Home },
];

export const MainRouter = () => {
  return (
    <MainApp>
      <BrowserRouter>
        <Routes>
          {PageRoutes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={React.createElement(route.element)}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter >
    </MainApp>
  );
};
