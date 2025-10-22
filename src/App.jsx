import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import MainLayout from "./Layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipeDetails/:id" element={<RecipeDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default App;