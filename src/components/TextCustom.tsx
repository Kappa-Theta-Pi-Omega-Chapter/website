import { Typography } from "@mui/material";

interface TextProps {
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: any;
  color?: string;
  paddingLeft?: any;
  paddingTop?: any;
  width?: number;
}

function TextCustom({
  children,
  fontWeight,
  fontSize,
  color,
  width,
}: TextProps) {
  return (
    <Typography
      sx={{
        fontFamily: "Inter",
        fontWeight,
        fontSize,
        color,
        width,
        textT: "none",
      }}
    >
      {children}
    </Typography>
  );
}

export default TextCustom;
