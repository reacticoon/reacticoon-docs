/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

const colors = {
  lighter: '#373940', // light blue
  dark: '#282c34', // dark blue
  darker: '#20232a', // really dark blue
  brand: '#61dafb', // electric blue
  brandLight: '#bbeffd',
  text: '#1a1a1a', // very dark grey / black substitute
  subtle: '#6d6d6d', // light grey for text
  subtleOnDark: '#999',
  divider: '#ececec', // very light grey
  note: '#ffe564', // yellow
  error: '#ff6464', // yellow
  white: '#ffffff',
  black: '#000000',
};

// Create a theme with Gatsby brand colors. You can choose your own
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.darker,
    },
    secondary: {
      main: colors.brand,
    },
  },
  app: {
    header: {
      height: 60,
    },
    link: {
      lineHeight: 2,
      cursor: 'pointer',
      color: 'black',
      '&:hover': {
        color: colors.brand,
      },
    },
  },
  colors,
  fonts: {
    small: {
      fontSize: 14,
    },
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
