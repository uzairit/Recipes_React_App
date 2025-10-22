import React from "react";
import RecipeCard from "./RecipeCard";
import { Box, Card } from "@mui/material";

const HomePageShimmer = () => {
  return (
    <>
      <Box
        sx={{
          height: "80vh",
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 4,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <Card
              key={i}
              sx={{
                width: "300px",
                height: "400px",
                borderRadius: 3,
                background:
                  "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
                backgroundSize: "400% 100%",
                animation: "shimmer 1.4s ease infinite",
              }}
            />
          );
        })}
      </Box>
    </>
  );
};

export default HomePageShimmer;
