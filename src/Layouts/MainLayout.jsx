import { Outlet, useLocation } from "react-router";
import { Box, Container, Divider } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { SearchProvider } from "../Context";
const MainLayout = () => {
  const location = useLocation();
  const isDetailedPage = location.pathname.includes('/recipeDetails')
  return (
    <Box
      sx={{
        backgroundColor: "#fff8f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SearchProvider>
        <Header hideSearch={isDetailedPage}/>
        <Container sx={{ flex: 1, py: 4 }}>
          <Outlet />
        </Container>
        <Divider />
        <Footer />
      </SearchProvider>
    </Box>
  );
};

export default MainLayout;
