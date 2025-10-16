import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
const Header = () => {
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
          <FontAwesomeIcon icon={faKitchenSet} />{" "}
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Recipe App
          </Typography>
        </Box>

        {/* Nav Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            startIcon={<HomeIcon />}
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              "&:hover": { background: "rgba(255,255,255,0.1)" },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            startIcon={<FavoriteIcon />}
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              "&:hover": { background: "rgba(255,255,255,0.1)" },
            }}
            onClick={() => alert("Coming soon ❤️")}
          >
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
