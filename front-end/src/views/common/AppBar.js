import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AppsConst } from 'shared/AppsConst';
import { logoutService } from 'service/auth/auth.service';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const pages = ['Contact', 'Gallary'];
const settings = ['Profile', 'Account', 'Logout'];

const AppBarMain = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const isLoged = localStorage.getItem(AppsConst.token) ? true : false;

    const authUser = isLoged ? localStorage.getItem(AppsConst.userName) : "M";

    const navigate = useNavigate();

    async function logoutHndle() {
        const response = logoutService();
        localStorage.clear();

        navigate("/pages/login/login3");

    }

    async function openGallary() {

        console.log('working');
        navigate("/pages/login/login3");

    }



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Link to='/home' style={{ textDecoration: 'none', color: 'white'}}>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'cursive',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Maduram Rental
                        </Typography>
                        </Link>
                        

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem >
                                    <Typography onClick={openGallary} textAlign="center">Gallary</Typography>

                                </MenuItem>
                                <MenuItem >
                                    <Typography onClick={openGallary} textAlign="center">Gallary</Typography>

                                </MenuItem>
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Link to='/home' style={{ textDecoration: 'none', color: 'white'}}>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Maduram Rental
                        </Typography>
                        </Link>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Link to='/contact' style={{ textDecoration: 'none', color: 'white', marginRight:'16px' }}>
                                <Typography textAlign="center">Contact</Typography>
                            </Link>

                            <Link to='/gallary' style={{ textDecoration: 'none', color: 'white' }}>
                                <Typography textAlign="center">Gallary</Typography>
                            </Link>



                            {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                        </Box>

                        {isLoged && <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open profile">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={authUser} src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={logoutHndle}>
                                    <Typography textAlign="center">
                                        Logout
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={(e) => navigate('/')}>
                                    <Typography textAlign="center">
                                        Profile
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={(e) => navigate('/')}>
                                    <Typography textAlign="center">
                                        Account
                                    </Typography>
                                </MenuItem>

                            </Menu>
                        </Box>}

                        {!isLoged &&
                            <NavLink style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} to='/pages/login/login3' >
                                Login
                            </NavLink>
                        }
                    </Toolbar>
                </Container>
            </AppBar>


        </>

    );
};
export default AppBarMain;
