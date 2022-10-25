import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Snackbar, Stack } from '@mui/material';
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
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CreateBrandService, getAllBrand } from 'service/brand/brand.service';
import AnimateButton from 'ui-component/extended/AnimateButton';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];




export default function Property() {

    const [open, setOpen] = React.useState(false);

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [seat, setSeat] = useState('');
    const [laggage, setLaggage] = useState('');
    const [fuel, setFuel] = useState('');
    const [gear, setGear] = useState('');

    const [showSnack, setSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [property, setProperty] = useState([]);

    const [brandList, setBrandList] = useState([])


    React.useEffect(() => {
        const getAllBrands = async () => {
            const brands = await getAllBrand();

            console.log(brands.data);
            setBrandList(brands.data)
            console.log(brandList);
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
            brand: brand,
            model: model,
            fuel: fuel,
            gear: gear,
            laggage: laggage,
            price: price,
            seat: seat,
            desc: desc
        }

        console.log(data);

        // const res = await CreateBrandService(data);

        // console.log(res);

        // if (res.data) {

        //     setMessage('Successfully created')
        //     setSnack(true)
        //     setMessage(res.message)
        //     setBrand(res.data)
        //     setOpen(false);

        //     setTimeout(() => {
        //         setSnack(false)
        //     }, 2000);

        // } else {

        //     console.log('error');
        // }

        setBrand('')
        setDesc('')
        setFuel('')
        setPrice('')
        setPrice('')
        setGear('')
        setLaggage('')
        setModel('')

    }
    function deleteData() {

        alert('coming soon');
    }

    function edit() {

        alert('coming soon');
    }

    const newBtn = <Button variant="contained" onClick={handleClickOpen} >Create new</Button>

    return (
        <>
            <MainCard title="Property" secondary={newBtn}>


                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
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
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>

                    <form noValidate>

                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={12}>
                                <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                <Select fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={brand}
                                    label="Brand"
                                    onChange={(e)=> setBrand(e.target.value)}
                                >
                                    {
                                        brandList.map((item)=>(
                                            <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>

                                        ))}
                                </Select>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth>
                                    <InputLabel >Model</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={model}
                                        name="model"
                                        onChange={(e) => setModel(e.target.value)}
                                        label="Model"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel >Description</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={desc}
                                        name="desc"
                                        onChange={(e) => setDesc(e.target.value)}
                                        label="Description"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel >Price per day</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={price}
                                        name="price"
                                        onChange={(e) => setPrice(e.target.value)}
                                        label="Price per day"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel >Number of seat</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={seat}
                                        name="seat"
                                        onChange={(e) => setSeat(e.target.value)}
                                        label="Number of seat"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel >Laggage information</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={laggage}
                                        name="laggage"
                                        onChange={(e) => setLaggage(e.target.value)}
                                        label="Laggage information"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Feuel type</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(e) => setFuel(e.target.value)}
                                    >
                                        <FormControlLabel value="Petrol" control={<Radio />} label="Petrol" />
                                        <FormControlLabel value="Electric" control={<Radio />} label="Electric" />
                                        <FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Transmission type</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(e) => setGear(e.target.value)}
                                    >
                                        <FormControlLabel value="Automatic" control={<Radio />} label="Automatic" />
                                        <FormControlLabel value="Manual" control={<Radio />} label="Manual" />

                                    </RadioGroup>
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
        </>
    )
}

