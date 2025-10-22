import { useEffect, useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import { useNavigate } from "react-router";
import HeroCarousel from "../Components/HeroCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import HomePageShimmer from "../Components/HomePageShimmer";
import { useSearch } from "../Context";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    searchQuery,
    selectedCuisine,
    setCuisineList,
    setDifficultyList,
    selectedDifficulty,
  } = useSearch();

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

  useEffect(() => {
    if (data.length > 0) {
      const uCuisine = [...new Set(data.map((item) => item.cuisine))];
      setCuisineList(uCuisine);
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const uDifficulty = [...new Set(data.map((item) => item.difficulty))];
      setDifficultyList(uDifficulty);
    }
  }, [data]);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCuisine =
      selectedCuisine === "All" || item.cuisine.includes(selectedCuisine);
    const matchesDifficulty =
      selectedDifficulty === "All" ||
      item.difficulty.includes(selectedDifficulty);
    return matchesSearch && matchesCuisine && matchesDifficulty;
  });

  return (
    <>
      {console.log(data)}
      {loading ? (
        <HomePageShimmer />
      ) : (
        <>
          <HeroCarousel handleDetails={handleDetails} />

          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            <FontAwesomeIcon icon={faKitchenSet} /> Recipes
          </h2>

          {filteredData.length > 0 ? (
            <div className="main">
              {filteredData.map((res) => (
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
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Typography color="error" variant="h6">
                Recipe not found
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Home;
