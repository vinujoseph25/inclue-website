import React from "react";
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormHelperText,
  FormControl,
} from "@mui/material";

interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  helperText?: string;
  error?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  error,
  ...props
}) => {
  return (
    <FormControl error={error}>
      <FormControlLabel
        control={<MuiCheckbox color="primary" {...props} />}
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Checkbox;
