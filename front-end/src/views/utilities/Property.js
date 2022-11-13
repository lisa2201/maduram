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
import CodePostal from 'assets/postal/france.json';
import { CreatePropertyService, deleteProps, getAllProperty } from 'service/property/property.service';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [seat, setSeat] = useState('');
    const [laggage, setLaggage] = useState('');
    const [fuel, setFuel] = useState('');
    const [gear, setGear] = useState('');

    const [showSnack, setSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [property, setProperty] = useState([]);

    const [brandList, setBrandList] = useState([]);

    const [codePostal, setPostal] = React.useState('');
    const [filterData, setFilterData] = useState([]);


    React.useEffect(() => {
        const getAllBrands = async () => {
            const brands = await getAllBrand();

            console.log(brands.data);
            setBrandList(brands.data)
            console.log(brandList);
        }

        const getAllProperties = async () => {
            const property = await getAllProperty();

            setProperty(property.data)
        }

        const getFilterData = () => {
            let filterData = CodePostal.filter(data => {
                if(data.fields.code_postal.startsWith('95')){
                    return data
                }
            });

            setFilterData(filterData)
        }

        getFilterData();

        getAllBrands();

        getAllProperties();

    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        resetForm();
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
            desc: desc,
            location:codePostal,
            img: img
        }

        console.log(data);

        const res = await CreatePropertyService(data);

        console.log(res);

        if (res.data) {

            setMessage('Successfully created')
            setSnack(true)
            setMessage(res.message)
            setProperty(res.data)
            setOpen(false);

            setTimeout(() => {
                setSnack(false)
            }, 2000);

        } else {

            console.log('error');
        }

        resetForm();

    }

    const resetForm = ()=> {
        setBrand('')
        setDesc('')
        setFuel('')
        setPrice('')
        setPrice('')
        setGear('')
        setLaggage('')
        setModel('')
        setImg('')
        setPostal('')
        setFuel('')
        setGear('')
    }

    async function deleteProperty( data) {

        const res = await deleteProps(data);

        console.log(res);

        if (res) {

            setProperty(res)

        } else {

            console.log('error');
        }

    };

    

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
                                        <TableCell>Brand</TableCell>
                                        <TableCell align="right">model</TableCell>
                                        <TableCell align="right">description</TableCell>
                                        <TableCell align="right">fuel</TableCell>
                                        <TableCell align="right">type of gear</TableCell>
                                        <TableCell align="right">laggage</TableCell>
                                        <TableCell align="right">No of seat</TableCell>
                                        <TableCell align="right">image</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {property.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.brand.name}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.desc}</TableCell>
                                            <TableCell align="right">{row.fuel}</TableCell>
                                            <TableCell align="right">{row.gear_type}</TableCell>
                                            <TableCell align="right">{row.laggage}</TableCell>
                                            <TableCell align="right">{row.seat}</TableCell>
                                            <TableCell align="right">
                                                <img src={row.img_path} style={{height:'50px', width:'100px'}}>
                                                </img>
                                            </TableCell>

                                            <TableCell align="right">
                                            <Button variant="contained" style={{marginRight:'12px', backgroundColor:'green'}} >Edit</Button>
                                            <Button variant="contained"  style={{marginRight:'12px', backgroundColor:'red'}}
                                            onClick={() => {

                                                deleteProperty(row._id)
                                                
                                            }}>Delete</Button>

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
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                   Create new property
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

                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth>
                                    <InputLabel >Image Path</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={img}
                                        name="image Path"
                                        onChange={(e) => setImg(e.target.value)}
                                        label="Image path"
                                        inputProps={{}}
                                    />

                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                <Select
                                    placeholder='postal code'
                                    id="demo-multiple-name"
                                    label="postal code"
                                    onChange={(e) => setPostal(e.target.value)}
                                    value={codePostal}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                >
                                    {filterData.map((postal) => (
                                        <MenuItem
                                            key={postal.recordid}
                                            value={postal.fields.code_postal}
                                        >
                                            {`${postal.fields.code_postal}-${postal.fields.libelle_d_acheminement}`}
                                        </MenuItem>
                                    ))}
                                </Select>
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
                                    <InputLabel >Price per day (Є)</InputLabel>
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

