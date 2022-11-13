import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import contactImg from 'assets/images/contact.png'
import Button from '@mui/material/Button';
import './style/custom.style.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import contactImgCar from 'assets/images/contactCover.jpg'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Contact() {


    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container style={{ maxWidth: '100%' }}>

                    <Grid container spacing={2} style={{ marginTop: '16px' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        < img src={contactImgCar} style={{width:'100%', height:'600px'}} />
                    </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6} style={{background: 'aliceblue' }}>

                            <Box>
                                <h1 style={{textAlign:'center'}}>
                                    Get in touch
                                </h1>
                                <p>
                                You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally. 
                                
                                </p>
                                <p>
                                Email us with any questions or inquiries or use our contact data. We would be happy to answer your questions.
                                </p>
                            </Box>
                                <Grid container spacing={2} style={{paddingRight:'12px'}}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>

                                    <TextField className='full-width' id="outlined-basic" label="your name" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <TextField className='full-width' id="outlined-basic" label="your email" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <TextField className='full-width' id="outlined-basic" label="subject" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <TextField className='full-width' id="outlined-basic" label="message" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Button variant="contained">Send message</Button>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <FacebookIcon/> <TwitterIcon/> <LinkedInIcon/> <InstagramIcon/>
                                    </Grid>

                                </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6} >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20929.26052233066!2d2.4507342298931403!3d49.026610168964154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e63ff60ebef231%3A0xcccdbfdb94686304!2sGoussainville!5e0!3m2!1sen!2sfr!4v1667941276660!5m2!1sen!2sfr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            {/* <img src={contactImg} style={{ width: '100%', height: '620px', boxShadow: '0.5', }} /> */}

                        </Grid>

                    </Grid>
                </Container>
            </React.Fragment>
        </>
    );
}
