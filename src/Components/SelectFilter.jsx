import { Box, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useSearch } from "../Context";

const SelectFilter = () => {
  const {
    setSelectedCuisine,
    cuisineList,
    difficultyList,
    setSelectedDifficulty,
  } = useSearch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        mt: 2,
        mb: 2,
      }}
    >
      {/* Cuisine Filter */}
      <FormControl
        size="small"
        sx={{
          minWidth: 160,
          backgroundColor: "#fff",
          borderRadius: "25px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <InputLabel sx={{ color: "#ff7043" }}>Cuisine</InputLabel>
        <Select
          label="Cuisine"
          onChange={(e) => setSelectedCuisine(e.target.value)}
          sx={{
            borderRadius: "25px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ff7043",
              boxShadow: "0 0 0 1px #ff7043",
            },
          }}
        >
          <MenuItem value="All">All Cuisines</MenuItem>
          {cuisineList?.map((cuisine) => (
            <MenuItem value={cuisine}>{cuisine}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Difficulty Filter */}
      <FormControl
        size="small"
        sx={{
          minWidth: 160,
          backgroundColor: "#fff",
          borderRadius: "25px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <InputLabel sx={{ color: "#ff7043" }}>Difficulty</InputLabel>
        <Select
          label="Difficulty"
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          sx={{
            borderRadius: "25px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ff7043",
              boxShadow: "0 0 0 1px #ff7043",
            },
          }}
        >
          <MenuItem value="All">All Difficulties</MenuItem>
          {difficultyList?.map((difficulty) => (
            <MenuItem value={difficulty}>{difficulty}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
