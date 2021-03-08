import { red, green, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const mainTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#013d57',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
    warning: {
      main: yellow.A400,
    },
    background: {
      default: '#1a1a1a',
      paper: 'rgba(26,26,26, 0.85)',
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(1,61,87, 0.7)',
        },
      },
    },
  },
});

export default mainTheme;
