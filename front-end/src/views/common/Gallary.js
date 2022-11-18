import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import gallaryCover from 'assets/images/gallary/gcover.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


import blueCar from 'assets/images/gallary/blue.jpeg';
import audi from 'assets/images/gallary/audi.jpeg';
import audiBlack from 'assets/images/gallary/audi-black.jpeg';
import audiSmoke from 'assets/images/gallary/audi-smoke.jpeg';
import bmwLeaves from 'assets/images/gallary/bmw-leave.jpeg';
import bmwRed from 'assets/images/gallary/bmw-red.jpeg';
import { height } from '@mui/system';
import './style/custom.style.scss'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Gallary() {
    const gallaryItems = [
        {
            img: [gallaryCover],
            title: 'testing title',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [blueCar],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [audi,audi,audi,audi,audi,audi,audi],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [audiBlack,audi,audiBlack,audiBlack,audiBlack,audiBlack,],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke,audiSmoke],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [bmwLeaves],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [bmwRed],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        },
        {
            img: [gallaryCover],
            title: '',
            desc: 'At Rent A Car, we offer our customers the possibility of booking a car rental adapted to their budget and their needs. We have selected several models of passenger vehicles for travel on the roads alone, as a couple, with family or with a group of friends.'
        }
    ]


    const [open, setOpen] = React.useState(false);
    const [selectedImg, setSelectedImg] = React.useState(gallaryItems[0]);

    // function handleClickOpen() {
    //     setOpen(true);
    // };

    async function handleClickOpen(e,index) {
        e.preventDefault()
        setSelectedImg(gallaryItems[index]);
        console.log(selectedImg);
        
        setTimeout(()=>{
            setOpen(true);
        },500)
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <img src={gallaryCover} className = "img-gallary"/>
                <Container style={{ maxWidth: '100%' }}>

                    <Grid container spacing={2} style={{ marginTop: '16px' }}>
                        {
                            gallaryItems.map((item, index) =>

                                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} key={index}>
                                    <Card >
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={item.img[0]}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: 'center' }}>

                                            <Button size="small" onClick={(e) => handleClickOpen(e,index)}>view</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            )
                        }
                    </Grid>
                </Container>
            </React.Fragment>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Gallary
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'center' }} >
                    <img src={selectedImg.img[0]} style={{width:'70%', height:'520px', float:'left',marginLeft:'16px', borderRadius:'10px'}}></img>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'left',margin:'auto', fontFamily:'cursive', fontWeight:'700' }}>
                        <Typography style={{width:'70%', background:'#98310c3b', padding:'24px', borderRadius:'10px', }}>
                        {selectedImg?.desc}
                        </Typography>
                </Grid>

                <Grid container spacing={2} style={{ margin: '16px' }}>

                {
                        selectedImg.img.map((item, index) =>

                            <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} key={index}>
                                <Card >
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={item}
                                    />
                                    
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>

                    
                </Grid>
            </Dialog>
        </>
    );
}
