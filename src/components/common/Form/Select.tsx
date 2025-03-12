import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  FormHelperText,
  MenuItem,
} from "@mui/material";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends Omit<MuiSelectProps, "variant"> {
  options: SelectOption[];
  label?: string;
  helperText?: string;
  error?: boolean;
  variant?: "outlined" | "filled" | "standard";
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  helperText,
  error,
  variant = "outlined",
  required,
  ...props
}) => {
  const labelId = `select-label-${label?.toLowerCase().replace(/\s+/g, "-") || "select"}`;

  return (
    <FormControl
      variant={variant}
      fullWidth
      error={error}
      required={required}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
        ...props.sx,
      }}
    >
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <MuiSelect labelId={labelId} label={label} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
