import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import SearchBar from "./SearchBar";
import SelectFilter from "./SelectFilter";
const Header = ({ hideSearch }) => {
  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        background: "#ff7043",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FontAwesomeIcon
            icon={faKitchenSet}
            style={{
              fontSize: "25px",
              marginRight: "8px",
            }}
          />{" "}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              textTransform: "uppercase",
              fontSize: "25px",
            }}
            onClick={() => navigate("/")}
          >
            Recipe App
          </Typography>
        </Box>
        {!hideSearch && (
          <>
            <SearchBar />
            <SelectFilter />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
