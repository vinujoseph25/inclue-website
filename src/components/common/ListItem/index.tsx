import React from "react";
import { ListItem as MuiListItem, ListItemProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Types
interface StyledListItemProps extends ListItemProps {
  to?: string;
  external?: boolean;
}

/**
 * A styled ListItem component using Material UI that can be used in menus,
 * lists, and navigation components.
 */
export const ListItem: React.FC<StyledListItemProps> = ({
  children,
  to,
  external = false,
  ...props
}) => {
  // Set up link props if this is a navigation button
  const linkProps = to
    ? {
        component: external ? "a" : RouterLink,
        ...(external
          ? { href: to, target: "_blank", rel: "noopener noreferrer" }
          : { to }),
      }
    : {};

  return (
    <MuiListItem {...props} {...linkProps}>
      {children}
    </MuiListItem>
  );
};

export default ListItem;
