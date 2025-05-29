import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
    color: {
        background: null,
        text: null,
    },
});

export const lightTheme = createTheme(vars, {
    color: {
        background: "#ffffff",
        text: "#111111",
    },
});

export const darkTheme = createTheme(vars, {
    color: {
        background: "#111111",
        text: "#ffffff",
    },
});