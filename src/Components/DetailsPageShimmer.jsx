import { Box, Card } from "@mui/material";

const DetailsPageShimmer = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          height: 500,
          width: 1100,
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />
      <Box
        sx={{
          height: 40,
          width: 350,
          mt: 5,
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />
      <Box
        sx={{
          height: 20,
          width: 200,
          mt: 3,
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        {Array.from({ length: 3 }).map(() => {
          return (
            <Box
              sx={{
                height: 35,
                width: 70,
                mt: 3,
                borderRadius: 50,
                background:
                  "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
                animation: "shimmer 1.4s ease infinite",
              }}
            />
          );
        })}
      </Box>

      <Box
        sx={{
          height: 30,
          width: 230,
          mt: 3,
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />

      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Box
            key={i}
            sx={{
              height: 10,
              width: 200,
              mt: 2,
              background:
                "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
              animation: "shimmer 1.4s ease infinite",
            }}
          />
        );
      })}

      <Box
        sx={{
          height: 30,
          width: 230,
          mt: 3,
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />

      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <Box
            key={i}
            sx={{
              height: 10,
              width: 600,
              mt: 2,
              background:
                "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
              animation: "shimmer 1.4s ease infinite",
            }}
          />
        );
      })}
      <Box
        sx={{
          height: 40,
          width: 140,
          mt: 3,
          borderRadius: 2,
          background: "linear-gradient(90deg, #ccc 25%, #ddd 37%, #ccc 63%)",
          animation: "shimmer 1.4s ease infinite",
        }}
      />
    </>
  );
};

export default DetailsPageShimmer;
