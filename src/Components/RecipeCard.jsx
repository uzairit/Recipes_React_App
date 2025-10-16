import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlatwareIcon from '@mui/icons-material/Flatware';

export default function RecipeCard({img , title,difficulty ,rating,prepTimeMinutes,handleDetails}) {
  return (
    <Card
      sx={{
        width: "300px",
        height: "400px",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fff",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="180"
        image={img}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ p: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
            color: "text.secondary",
            fontSize: 14,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon sx={{ color: "#ffb400", fontSize: 18 }} />
            {rating}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 18 }} color="warning"/>
            {prepTimeMinutes} min
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FlatwareIcon sx={{ fontSize: 18 }} color="success"/>
            {difficulty}
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            background: "#ff7043",
            textTransform: "none",
            "&:hover": { background: "#f4511e" },
          }}
          onClick={handleDetails}
        >
          View Recipe
        </Button>
        <Button
          size="small"
          variant="outlined"
          sx={{
            color: "#ff7043",
            borderColor: "#ff7043",
            textTransform: "none",
            "&:hover": {
              borderColor: "#f4511e",
              color: "#f4511e",
            },
          }}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
