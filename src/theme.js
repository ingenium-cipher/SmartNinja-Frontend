import { createTheme } from "@mui/material/styles";

const COLOR_PALETTE = {
  primary: {
    lighter: "#ffffff",
    light: "#f8faff",
    main: "#1a64f1",
    dark: "#041527",
    text: "#1e1e1e",
    contrastText: "#ffffff",
    borderColor: "#1e1e1e",
    contrastBorderColor: "#ffffff",
    easy: "#00af9b",
    medium: "#ffb800",
    hard: "#ff2d55",
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000",
  },
  action: {
    hover: "#1e1e1e",
  },
};

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "none!important",
          justifyContent: "space-between",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", type: "table-filter" },
          style: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1rem",
            borderRadius: "5px",
          },
        },
        {
          props: { type: "subject-filter" },
          style: {
            fontSize: "1rem",
            fontWeight: "500",
            lineHeight: "1.25rem",
            borderRadius: "5px",
            ":hover": {
              borderColor: COLOR_PALETTE.primary.borderColor,
            },
          },
        },
        {
          props: { variant: "outlined", type: "subject-filter" },
          style: {
            color: COLOR_PALETTE.primary.text,
            borderColor: COLOR_PALETTE.primary.borderColor,
          },
        },
        {
          props: { variant: "contained", type: "subject-filter" },
          style: {
            color: COLOR_PALETTE.primary.contrastText,
            backgroundColor: COLOR_PALETTE.primary.text,
            borderColor: COLOR_PALETTE.primary.borderColor,
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          paddingBottom: "0",
          paddingTop: "0",
        },
      },
    },
  },
  palette: COLOR_PALETTE,
  typography: {
    fontFamily: '"Hanken Grotesk", sans-serif;',
    tableHeader: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1rem",
    },
    tableFilter: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1rem",
    },
  },
});

export default theme;
