import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';

const initialObject = {
  username: "",
  email: "",
  password: "",
};

function RegistrationForm() {
  const [formInitData, setFormInItData] = useState(initialObject);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  let timer;

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handlePasswordShow = () => {
    setPasswordVisible(!passwordVisible);
  }

  const handleInputFields = (e) => {
    let updateValue = { ...formInitData };
    updateValue[e.target.name] = e.target.value;
    setFormInItData(updateValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setOpen(true);
      timer = setTimeout(() => {
        setOpen(false);
        dispatch({
          type: "REGISTER",
          payload: {
            userName: formInitData?.username,
            email: formInitData?.email,
            password: formInitData?.password
          },
        })
      }, 1500);
    }
  };

  const validateForm = () => {
    let fields = { ...formInitData };
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    } else {
      if (typeof fields["password"] !== "undefined") {
        // if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //   formIsValid = false;
        //   errors["password"] = "*Password must be a strong with a maximum length of 8.";
        // }

        if (fields["password"].length < 8) {
          formIsValid = false;
          errors["password"] = "*Your password must be at least 8 characters";
        } else if (fields["password"].search(/[a-z]/i) < 0) {
          formIsValid = false;
          errors["password"] = "*Your password must contain at least one letter.";
        } else if (fields["password"].search(/[0-9]/) < 0) {
          formIsValid = false;
          errors["password"] = "*Your password must contain at least one digit.";
        }
      }
    }

    setErrors(errors);
    return formIsValid;

  }

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
        Sign in to Travelguru
      </Typography>
      <Typography
        variant="subtitle1"
        className="full-width"
        gutterBottom
        sx={{
          borderBottom: '1px solid gray',
          pb: 3
        }}
      >
        Don't have an account? <Link color="#FF4F57" href="/">Sign up</Link>
      </Typography>
      <Box className={`${open ? "loading_form" : ""}`} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          value={formInitData.username}
          onChange={handleInputFields}
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          helperText={errors?.username}
          error={errors?.username}
        />
        <TextField
          value={formInitData.email}
          onChange={handleInputFields}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          helperText={errors?.email}
          error={errors?.email}
        />
        <FormControl sx={{ mt: 2, mb: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            value={formInitData.password}
            onChange={handleInputFields}
            helperText={errors?.password}
            error={errors?.password}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordShow}
                  edge="end"
                >
                  {passwordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors?.password &&
            <p
              class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained Mui-required css-1wc848c-MuiFormHelperText-root"
              id="password-helper-text">{errors?.password}</p>
          }
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="btn-prm"
          sx={{ mt: 3 }}
        >
          Continue
        </Button>
      </Box>
      {open &&
        <Box className="form_loading" sx={{ display: 'flex', mt: '2rem' }}>
          <CircularProgress />
        </Box>
      }
    </Box>

  );
}

export default RegistrationForm;
