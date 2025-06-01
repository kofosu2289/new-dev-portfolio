import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  gap: "1rem",
});

export const navItem = style({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: "inherit",
  transition: "text-decoration 0.2s",
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
    "&:focus": {
      outline: "2px solid #4f46e5",
      outlineOffset: "2px",
    },
  },
});

export const active = style({
  fontWeight: "bold",
  textDecoration: "underline",
});