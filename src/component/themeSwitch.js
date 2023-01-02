import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import RakBankLogo from "../img/raklogo.png";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

function ThemeSwitch(props) {

  const dispatch = useDispatch()

  const handleSwithch = () => {
    dispatch({
      type: "TOOGLE_THEME",
      payload: ""
    })
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <img
          src={`${RakBankLogo}`}
          alt={'RAKBANK'}
          loading="lazy"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} className="textright" component={Paper} elevation={6} square>
        <IconButton sx={{ ml: 1 }} onClick={handleSwithch} color="inherit">
          {props?.theme?.theme_Toogle ? <Brightness7Icon /> : <Brightness2OutlinedIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeLightToDark,
  };
};

export default connect(mapStateToProps)(ThemeSwitch);

