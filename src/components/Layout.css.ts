import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const layout = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  minHeight: "100vh",
  transition: "background-color 0.2s, color 0.2s",
});

export const main = style({
  padding: "1rem",
});
