import { Outlet, useNavigate } from "react-router";
import { Box, Container, Divider } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#fff8f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
};

export default MainLayout;
