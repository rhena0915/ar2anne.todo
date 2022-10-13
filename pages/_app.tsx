import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline } from '@mui/material';
import { blue, green, orange } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
