import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroCarousel = ({handleDetails}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((result) => setData(result.recipes))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <Box sx={{ position: "relative", height: "80vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {data.slice(0, 3).map((slide, i) => (
          <Box
            key={i}
            sx={{
              height: "80vh",
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h2"
                fontWeight={700}
                gutterBottom
                sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
              >
                {slide.name}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ff7043",
                  "&:hover": { backgroundColor: "#f4511e" },
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={()=>handleDetails(slide.id)}
              >
                Explore Recipe
              </Button>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroCarousel;