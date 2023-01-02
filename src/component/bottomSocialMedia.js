import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GoogleLogin } from 'react-google-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Link from '@mui/material/Link';

function BottomSocialMedia() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <Box
      sx={{
        my: 3,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={10} md={7}>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className='google_social_icon'
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Link className="icon_bg" href="/"><FacebookIcon className='face_icon' /></Link>
        </Grid>
        <Grid item xs={2} sm={2} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Link className="icon_bg" href="/"><AppleIcon className='apple_icon' /></Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BottomSocialMedia;

