import { useEffect, useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import { useNavigate } from "react-router";
import { Box, CircularProgress } from "@mui/material";
import HeroCarousel from "../Components/HeroCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((rec) => rec.json())
      .then((result) => {
        setData(result.recipes);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/recipeDetails/${id}`);
  };

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

  return (
    <>
      <HeroCarousel handleDetails={handleDetails} />

      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        <FontAwesomeIcon icon={faKitchenSet} /> Recipes
      </h2>

      <div className="main">
        {data.map((res) => (
          <RecipeCard
            key={res.id}
            img={res.image}
            title={res.name}
            difficulty={res.difficulty}
            rating={res.rating}
            prepTimeMinutes={res.prepTimeMinutes}
            handleDetails={() => handleDetails(res.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
