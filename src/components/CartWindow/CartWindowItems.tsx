import { Stack, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const CartWindowItems: React.FC = () => {
  const { palette, typography } = useTheme();

  return (
    <Stack sx={{ paddingTop: "1rem" }}>
        
      <Box
        sx={{
          width: "100%",
          maxHeight: "200px",
          display: "flex",
          borderBlock: `2px solid ${palette.secondary.light}`,
          paddingInline: "1.5rem",
        }}
      >
        <Box
          sx={{
            maxWidth: "150px",
            maxHeight: "150px",
            paddingInline: "0.5rem",
            paddingBlock: "0.5rem",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={"/products/amplifiers/BlackstarHTVenueSeriesClub4040W1x12.png"}
          ></img>
        </Box>
        <Stack
          sx={{
            paddingBlock: "1rem",
            paddingInline: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ paddingBottom: "0.3rem" }}
              color={palette.secondary.contrastText}
              fontFamily={typography.h1.fontFamily}
              fontSize="18px"
              fontWeight="300"
              textAlign={"left"}
            >
              Blackstar HT Venue Series
            </Typography>
            <Typography
              sx={{}}
              color={palette.secondary.contrastText}
              fontFamily={typography.h1.fontFamily}
              fontSize="15px"
              fontWeight="400"
              textAlign={"left"}
            >
              Quantity: 1
            </Typography>
            <Typography
              sx={{}}
              color={palette.primary.main}
              fontFamily={typography.h1.fontFamily}
              fontSize="22px"
              fontWeight="600"
              textAlign={"left"}
            >
              1999.99$
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              title={"Delete from Cart"}
              sx={{ border: `2px solid ${palette.complementary.alert}` }}
              size="medium"
            >
              <DeleteSharpIcon
                sx={{ fill: palette.complementary.alert }}
                fontSize="medium"
              />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CartWindowItems;
