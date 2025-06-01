import { style } from "@vanilla-extract/css";

export const toggleButton = style({
  padding: "0.5rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: "0.875rem",
  transition: "background-color 0.2s ease, border-color 0.2s ease",
  selectors: {
    '&:hover': {
      backgroundColor: "#f0f0f0",
    },
    '&:focus': {
      outline: "2px solid #4f46e5",
      outlineOffset: "2px",
    },
    '[data-theme="dark"] &': {
      borderColor: "#555",
      '&:hover': {
        backgroundColor: "#222",
      },
    },
  },
});