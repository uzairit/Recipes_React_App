import { useSearch } from "../Context";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        mb: 2,
        width: "30%",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search Recipe..."
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#ff7043" }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "25px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          },
        }}
        sx={{
          width: "90%",
          maxWidth: "500px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ff7043",
              boxShadow: "0 0 0 1px #ff7043",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
