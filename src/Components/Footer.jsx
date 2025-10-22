import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 3,
        background: "#fff",
        color: "#555",
        mt: "auto",
        borderTop: "1px solid #eee",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} 🍳 <strong>Recipe App</strong> — All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;