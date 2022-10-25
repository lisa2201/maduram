import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import contactImg from 'assets/images/contact.png'
import TextareaAutosize from '@mui/material/TextareaAutosize';

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
                        <Grid item xs={12} sm={4} md={4} lg={4} style={{ textAlign: 'center', background: 'aliceblue' }}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="email" variant="outlined" />
                                <TextField id="outlined-basic" label="name" variant="outlined" />
                                <TextareaAutosize
                                    maxRows={10}
                                    minRows={3}
                                    aria-label="message"
                                    placeholder="message"
                                    
                                    style={{ width: 200 }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={8} md={8} lg={8} style={{ textAlign: 'center' }}>
                            <img src={contactImg} style={{ width: '100%', height: '620px', boxShadow: '0.5', }} />

                        </Grid>

                    </Grid>
                </Container>
            </React.Fragment>
        </>
    );
}
