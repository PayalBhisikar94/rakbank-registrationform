import React from "react";
import Grid from '@mui/material/Grid';
import Darkimg from '../img/dark_cover.jpg';
import Lightimg from '../img/light_cover.jpg';
import { connect } from "react-redux";

function LeftSideBar(props) {
  
  return (
    <Grid
      item
      xs={false}
      sm={6}
      md={6}
      className="left_banner"
      sx={{
        backgroundImage: `${props?.theme?.theme_Toogle ? `url(${Lightimg})` : `url(${Darkimg})`}`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeLightToDark,
  };
};

export default connect(mapStateToProps)(LeftSideBar);