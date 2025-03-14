import React from "react";
import { MenuItem, MenuItemProps, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

// Define the props interface extending MenuItemProps
interface StyledMenuItemProps extends MenuItemProps {
  active?: boolean;
  dense?: boolean;
  className?: string;
  to?: string;
}

export const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>(
  ({ theme }) => ({
    padding: theme.spacing(1.5, 2),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
    "&.active": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  }),
);

export default StyledMenuItem;
