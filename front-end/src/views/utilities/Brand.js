import { Alert, FormControl, FormControlLabel, Grid, InputLabel, OutlinedInput, Snackbar, Stack } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CreateBrandService, getAllBrand } from 'service/brand/brand.service';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


export default function Brand() {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [showSnack, setSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [brandList, setBrand] = useState([]);

    // init
    React.useEffect(() => {
        const getAllBrands = async () => {
            const brands = await getAllBrand();

            setBrand(brands.data)
        }

        getAllBrands();

    }, []);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: name,
            desc: desc
        }

        const res = await CreateBrandService(data);

        console.log(res);

        if (res.data) {

            setMessage('Successfully created')
            setSnack(true)
            setMessage(res.message)
            setBrand(res.data)
            setOpen(false);

            setTimeout(() => {
                setSnack(false)
            }, 2000);

        } else {

            console.log('error');
        }

        setName('')
        setDesc('')

    }
    function deleteData(){

        alert('coming soon');
    }

    function edit(){

        alert('coming soon');
    }

    const newBtn = <Button variant="contained" onClick={handleClickOpen} >Create new</Button>

    return (
        <>
            <MainCard title="Brand" secondary={newBtn}>


                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell >Description</TableCell>
                                        <TableCell >Created at</TableCell>
                                        <TableCell >Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {brandList.map((row) => (
                                        <TableRow
                                            key={row.created_at}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell >{row.desc}</TableCell>
                                            <TableCell >{row.created_at}</TableCell>
                                            <TableCell >

                                                <Button
                                                    disableElevation
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={edit}
                                                    style={{marginRight: '5px'}}
                                                >
                                                    Edit
                                                </Button>

                                                <Button onClick={deleteData} variant="contained" size="small" color="error">Delete</Button>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </MainCard>

            {/* dialog for creating new brand */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Create new Brand"}
                </DialogTitle>
                <DialogContent>
                    <form noValidate>

                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-email-login">Name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-email-login"
                                        type="text"
                                        value={name}
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        label="Name"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                >
                                    <InputLabel htmlFor="outlined-adornment-password-login">Description</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password-login"
                                        type="text"
                                        value={desc}
                                        name="description"
                                        onChange={(e) => setDesc(e.target.value)}

                                        label="Description"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                        </Grid>

                    </form>
                </DialogContent>
                <DialogActions>
                    <span>
                        <Button onClick={handleClose} variant="contained" size="large" color="error">Close</Button>
                    </span>
                    <span>
                        <AnimateButton>
                            <Button
                                disableElevation
                                fullWidth
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </AnimateButton>
                    </span>


                </DialogActions>
            </Dialog>

            {showSnack && <Snackbar open={showSnack} autoHideDuration={500}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>}
        </>


    )
}

