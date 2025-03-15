import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import intl from "react-intl-universal";

interface UpdatedDateProps {
  date: Date;
}

export const UpdatedDate: React.FC<UpdatedDateProps> = ({ date }) => {
  const theme = useTheme();

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        px: 2,
        bgcolor: "background.paper",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        maxWidth: "fit-content",
        mb: 2,
      }}
    >
      <UpdateIcon
        fontSize="small"
        sx={{
          color: theme.palette.text.secondary,
          mr: 1,
        }}
      />
      <Typography variant="body2" color="text.secondary">
        {intl.get("legal.lastUpdated") || "Last Updated"}: {formattedDate}
      </Typography>
    </Box>
  );
};
