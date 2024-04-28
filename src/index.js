import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeContext, useMode } from './theme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import './index.css';
import { AuthProvider } from "./components/hooks/Authcontext"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function Index() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <AuthProvider> 
        <React.StrictMode>
          <App />
        </React.StrictMode></AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

reportWebVitals();
