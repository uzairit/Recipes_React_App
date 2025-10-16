import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Chip,
  Grid,
  Button,
  CircularProgress,
  Rating,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlatwareIcon from "@mui/icons-material/Flatware";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setRecipe(result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!recipe)
    return (
      <Typography align="center" mt={5} color="error">
        Recipe not found
      </Typography>
    );

  return (
    <div>
      <Box sx={{ p: 4, background: "#fff8f0", minHeight: "100vh" }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            color: "#ff7043",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#ffe8e0" },
          }}
        >
          Back
        </Button>

        <Grid container spacing={4}>
          {/* LEFT: Image */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={recipe.image}
                alt={recipe.name}
                sx={{ height: 400, objectFit: "cover" }}
              />
            </Card>
          </Grid>

          {/* RIGHT: Content */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {recipe.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Rating value={recipe.rating} precision={0.1} readOnly />
              <Typography variant="body1" color="text.secondary">
                {recipe.rating} / 5
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                mb: 3,
              }}
            >
              <Chip
                icon={<AccessTimeIcon />}
                label={`${recipe.prepTimeMinutes} min`}
                color="warning"
                variant="outlined"
              />
              <Chip
                icon={<FlatwareIcon />}
                label={recipe.difficulty}
                color="success"
                variant="outlined"
              />
              <Chip
                icon={<FlatwareIcon />}
                label={`${recipe.cuisine}`}
                color="primary"
                variant="outlined"
              />
            </Box>

            <Typography variant="h6" fontWeight={600} gutterBottom>
              Ingredients:
            </Typography>
            <Box sx={{ mb: 3 }}>
              {recipe.ingredients.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{ ml: 2, color: "text.secondary" }}
                >
                  • {item}
                </Typography>
              ))}
            </Box>

            <Typography variant="h6" fontWeight={600} gutterBottom>
              Instructions:
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.6, color: "text.secondary" }}
            >
              {recipe.instructions.join(" ")}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  background: "#ff7043",
                  textTransform: "none",
                  "&:hover": { background: "#f4511e" },
                }}
              >
                Start Cooking
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RecipeDetails;
