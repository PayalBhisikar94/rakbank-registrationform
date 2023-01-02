import React from "react";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SuccessPage(props) {

  return (
    <Box
      sx={{
        my: 3,
        mx: 4,
        pt: 3,
        pb: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray'
      }}
    >
      <Typography
        className="full-width"
        component="h1"
        variant="h4"
        sx={{ mb: 2 }}
      >
        Congratulation {props?.user?.users?.userName}!
      </Typography>
      <Typography
        variant="subtitle1"
        className="full-width"
        gutterBottom
      >
        You have been successfully registered.
      </Typography>
    </Box>

  );
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps)(SuccessPage);
