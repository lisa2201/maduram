import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import { Link, useNavigate} from 'react-router-dom';

// import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { registerService } from 'service/auth/auth.service';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [showSnack, setSnack] = useState(false);
    const navigate = useNavigate();

    const googleHandler = async () => {
        console.error('Register');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
            dob: dob,
            fname: fName,
            lname: lName
        }
        console.log(data);

        const res = await registerService(data);

        if (res.data) {
            
            setSnack(true)
            navigate("/pages/login/login3");
            setTimeout(() => {
                setSnack(false)
            }, 2000);
        } else {

            console.log('error');
        }

        // 👇️ clear all input values in the form
        setEmail('');
        setPassword('');
        setDob('');
        setFname('');
        setLname('');

    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            {/* <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box> */}
                            Sign up with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <form noValidate>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            margin="normal"
                            name="fname"
                            type="text"
                            onChange={(e) => {
                                setFname(e.target.value)
                            }}
                            value={fName}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            margin="normal"
                            name="lname"
                            type="text"
                            onChange={(e) => {
                                setLname(e.target.value)
                            }}
                            value={lName}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                </Grid>
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                    <InputLabel htmlFor="outlined-adornment-email-register">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email-register"
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        inputProps={{}}
                    />
                </FormControl>

                <FormControl
                    fullWidth
                    sx={{ ...theme.typography.customInput }}
                >
                    <InputLabel htmlFor="outlined-adornment-password-register">Date of birth</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-register"
                        type='date'
                        value={dob}
                        name="date of birth"
                        label="date of birth"
                        onChange={(e) => {
                            setDob(e.target.value)
                        }}
                    />
                </FormControl>

                <FormControl
                    fullWidth
                    sx={{ ...theme.typography.customInput }}
                >
                    <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-register"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        name="password"
                        label="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        inputProps={{}}
                    />
                </FormControl>

                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                />
                            }
                            label={
                                <Typography variant="subtitle1">
                                    Agree with &nbsp;
                                    <Typography variant="subtitle1" component={Link} to="#">
                                        Terms & Condition.
                                    </Typography>
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Button
                        disableElevation
                        fullWidth
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                    >
                        Sign up
                    </Button>
                </Box>
            </form>

            {showSnack && <Snackbar open={showSnack} autoHideDuration={500}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Successfully regitered
                </Alert>
            </Snackbar>}

        </>
    );
};

export default FirebaseRegister;
