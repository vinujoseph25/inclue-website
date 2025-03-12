import React, { useState } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: "outlined" | "filled" | "standard";
}

const TextField: React.FC<TextFieldProps> = ({
  variant = "outlined",
  type,
  InputProps,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Add password visibility toggle if the field is a password type
  const getInputProps = () => {
    if (type === "password") {
      return {
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTogglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      };
    }

    return InputProps;
  };

  return (
    <MuiTextField
      variant={variant}
      type={type === "password" && showPassword ? "text" : type}
      InputProps={getInputProps()}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        },
        ...props.sx,
      }}
      fullWidth
      {...props}
    />
  );
};

export default TextField;
