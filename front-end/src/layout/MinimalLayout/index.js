import { Outlet } from 'react-router-dom';

// project imports
import Customization from '../Customization';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
// ==============================|| MINIMAL LAYOUT ||============================== //
import Header from '../MainLayout/Header';
import AppBarMain from 'views/common/AppBar';


const MinimalLayout = () => (
    <>
        <AppBarMain/>

        <Outlet />
        {/* <Customization /> */}
    </>
);

export default MinimalLayout;
