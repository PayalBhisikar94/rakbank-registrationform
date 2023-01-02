import React, { useEffect, useState, useMemo } from "react";
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LeftSideBar from "./component/leftSideBar";
import RegistrationForm from "./component/registrationForm";
import ThemeSwitch from "./component/themeSwitch";
import BottomSocialMedia from "./component/bottomSocialMedia";
import SuccessPage from "./component/successPage";
import { connect } from "react-redux";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App(props) {

  const [mode, setMode] = useState('light');
  const [showSuccessMassage, setShowSuccessMassage] = useState(false);

  useEffect(() => {

    setMode(props?.theme?.theme_Toogle ? 'light' : 'dark')

  }, [props?.theme?.theme_Toogle]);

  useEffect(() => {

    setShowSuccessMassage(props?.showSuccessMassage?.RegistrSuccess)

  }, [props?.showSuccessMassage?.RegistrSuccess]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} sx={{ mt: 8, mb: 8, pl: 15, pr: 15, }} component="main">
          <CssBaseline />
          <LeftSideBar />
          <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
            <ThemeSwitch />
            {!showSuccessMassage ?
              <>
                <RegistrationForm />
                <BottomSocialMedia />

              </> :
              <SuccessPage />
            }
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeLightToDark,
    showSuccessMassage: state.users,
  };
};

export default connect(mapStateToProps)(App);

