import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HomeComponent from "./HomeComponent";
import Grid from "@mui/material/Grid";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import ServiceCard from "./Service";
import RangOfCarsAndVan from "./RangOfCarsAndVan";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getCodePostal } from "service/common/country.service";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import CodePostal from "assets/postal/france.json";
import { useState } from "react";
import { getAllProperty } from "service/property/property.service";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PowerIcon from "@mui/icons-material/Power";
import Tooltip from "@mui/material/Tooltip";
import LuggageIcon from "@mui/icons-material/Luggage";
import { date } from "yup";
import rangeCar from "assets/images/home/rangeCar1.jpg";
import rangeVan from "assets/images/home/rangeVan.jpg";
import WithoutLicence from "assets/images/home/WithoutLicence.jpg";



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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function SimpleContainer() {
  const theme = useTheme();
  const [startDate, setStartDate] = React.useState(dayjs(new Date()));
  const [endDate, setEndDate] = React.useState(dayjs(new Date()));

  const [filterData, setFilterData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [showData, setShowData] = useState(false);
  const [codePostal, setPostal] = React.useState(properties[0]);

  const handleChangePostal = (event) => {
    const {
      target: { value },
    } = event;
  };

  const handleChangeSDate = (newValue) => {
    setStartDate(newValue);
  };

  const handleChangeEDate = (newValue) => {
    setEndDate(newValue);
  };

  React.useEffect(() => {
    const getFilterData = () => {
      let filterData = CodePostal.filter((data) => {
        if (data.fields.code_postal.startsWith("95")) {
          return data;
        }
      });

      setFilterData(filterData);
    };

    // const getDefaultProps = async () => {
    //   const brands = await getAllProperty();

    //   setProperties(brands.data);
    // };

    // getDefaultProps();

    getFilterData();
  }, []);

  const service = [
    {
      name: "Rental for pros",
      title: "PROFESSIONAL SERVICE",
      discription:
        "Maduram has been supporting you in the B to B sector for 20 years, and offers a quality car and utility rental service adapted to your activity.",
      img: "https://www.rentacar.fr/_next/image?url=https%3A%2F%2Frac-production-strapi-uploads.s3.eu-west-3.amazonaws.com%2FImage_15_2x_c0d977077b.png&w=828&q=45",
      fontColor: "#c51861",
    },
    {
      name: "VTC rental",
      title: "PROFESSIONAL SERVICE",
      discription:
        "Maduram, official partner of Uber, has set up a series of rental car offers for the VTC market adapted to your activity.",
      img: "https://www.rentacar.fr/_next/image?url=https%3A%2F%2Frac-production-strapi-uploads.s3.eu-west-3.amazonaws.com%2Fvtc_5736b54535.png&w=828&q=45",
      fontColor: "#c51861",
    },
    {
      name: "One way rental",
      title: "SPECIAL SERVICE",
      discription:
        "With the one-way ticket, rent your vehicle in one agency and return it in another!",
      img: "https://www.rentacar.fr/_next/image?url=https%3A%2F%2Frac-production-strapi-uploads.s3.eu-west-3.amazonaws.com%2FGroupe_9417_2x_aa472c8c95.webp&w=828&q=45",
      fontColor: "#0069b4",
    },
    {
      name: "Rental Without License",
      title: "SPECIAL SERVICE",
      discription:
        "Maduram now offers car rental without a gas, electric or even utility license.",
      img: "https://www.rentacar.fr/_next/image?url=https%3A%2F%2Frac-production-strapi-uploads.s3.eu-west-3.amazonaws.com%2FImage_23_2x_026ab89def.webp&w=828&q=45",
      fontColor: "#0069b4",
    },
  ];

  const rangeOfCarAndVan = [
    {
      name: "Cars",
      title: "Our types of cars",
      discription:
        "Book a car adapted to your budget and your travel needs on the roads alone, as a couple, as a family or in a group.",
      img: rangeCar,//"https://www.rentacar.fr/_next/image?url=https%3A%2F%2Frac-production-strapi-uploads.s3.eu-west-3.amazonaws.com%2F1_c7bf10659b.png&w=384&q=45",
      fontColor: "#c51861",
    },
    {
      name: "Utilities",
      title: "Our types of Utilities",
      discription:
        "To be able to meet your moving or goods transport needs, we have selected several models of trucks, vans and vans for rent.",
      img: rangeVan,
      fontColor: "#c51861",
    },
    {
      name: "Without license",
      title: "Our types of Unlicensed",
      discription:
        "Maduram and Aixam offer four categories of license-free vehicles: economy, premium, electric and utility vehicles. the one-way ticket, rent your vehicle in one agency and return it in another!",
      img: WithoutLicence,
      fontColor: "#0069b4",
    },
  ];

  const moreContent = [
    {
      title: "100% secure payment",
      img: "https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/shield_595e6f26d5.svg",
    },
    {
      title: "Free cancellation",
      img: "https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/Logo_48h_2a069870a7.svg",
    },
    {
      title: "Need help ?",
      img: "https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/questions_0fae6016ba.svg",
    },
    {
      title: "Our engagements",
      img: "https://rac-production-strapi-uploads.s3.eu-west-3.amazonaws.com/engagements_0d1e8f1d95.svg",
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();

    setProperties([]);
    setShowData(true);

    const data = {
      codePostal: codePostal,
      startDate: new Date(startDate).toLocaleDateString("en-US"),
      endDate: new Date(endDate).toLocaleDateString("en-US"),
    };

    console.log(data);

    const res = await getAllProperty();

    console.log(res);

    if (res.data) {
      let filterProps = res.data.filter((item, index) => {
        return item.code_postal === codePostal;
      });

      setProperties(filterProps);

    } else {
      console.log("error");
    }
  }

  const getTitile = (item) => {
    return `${item.brand.name}-${item.name}`;
  };

  const gateDate = () => {
    return `${startDate.format("YYYY-MM-DD")} - ${endDate.format(
      "YYYY-MM-DD"
    )}`;
  };

  const calculateTotal = (item) => {
    const date1 = new Date(startDate.format("YYYY/MM/DD"));
    const date2 = new Date(endDate.format("YYYY/MM/DD"));
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `${
      diffDays == 0 ? 1 * item.price_per_day : diffDays * item.price_per_day
    } EUR`;
  };
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container style={{ maxWidth: "100%" }}>
          {/* filter */}
          <Grid container spacing={2} style={{ marginTop: "16px" }}>
            <Grid item xs={12} sm={2} md={2}></Grid>
            <Grid item xs={12} sm={3} md={3}>
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <Select
                  placeholder="postal code"
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
            <Grid item xs={12} sm={2} md={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                  <DateTimePicker
                    label="Start date"
                    value={startDate}
                    onChange={handleChangeSDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                  <DateTimePicker
                    label="End date"
                    value={endDate}
                    onChange={handleChangeEDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={3} md={3} style={{ marginTop: "14px" }}>
              <Button onClick={handleSubmit} variant="contained">
                Search
              </Button>
            </Grid>
          </Grid>
          {/* Only display after getting filter datas */}

          {properties && properties.length > 0 && (
            <Grid container spacing={2} style={{ marginTop: "16px" }}>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h1>Search results</h1>
              </Grid>

              {properties.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item._id}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    style={{ border: "2px #f5efef solid" }}
                  >
                    <CardHeader
                      title={getTitile(item)}
                      subheader={gateDate()}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={item.img_path}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item.desc}
                      </Typography>
                      <Tooltip title="Price per day">
                        <Typography variant="body2" color="text.secondary">
                          Price: {item.price_per_day}
                        </Typography>
                      </Tooltip>

                      <Tooltip title="total amount for the booking day">
                        <Typography variant="body2" color="text.secondary">
                          Total: {calculateTotal(item)}
                        </Typography>
                      </Tooltip>
                    </CardContent>
                    <CardActions disableSpacing>
                      <Tooltip title="No of seats">
                        <IconButton aria-label="add to favorites">
                          <AirlineSeatReclineNormalIcon /> {item.seat}
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="No of laggage">
                        <IconButton aria-label="share">
                          <LuggageIcon />
                          {item.laggage}
                        </IconButton>
                      </Tooltip>

                      <Tooltip title={item.fuel}>
                        <IconButton aria-label="share">
                          {item.fuel && item.fuel == "Electric" && (
                            <PowerIcon />
                          )}

                          {item.fuel && item.fuel == "Petrol" && (
                            <LocalGasStationIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  </Card>

                  {/* <ServiceCard
                      name={item.name}
                      title={item.brand.name}
                      desc={item.desc}
                      img={item.img_path}
                      color={'black'}
                    ></ServiceCard> */}
                </Grid>
              ))}
            </Grid>
          )}

          {properties.length == 0 && showData == true && (
            <Grid container spacing={2} style={{ marginTop: "16px" }}>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h1>Search results</h1>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <img src="https://www.infographics.directory/web_asset/images/data_not_found.png" />
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2} style={{ marginTop: "16px" }}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <h1>Our rental services</h1>
            </Grid>

            {service.map((item) => (
              <Grid item xs={6} md={3} key={item.name}>
                <ServiceCard
                  name={item.name}
                  title={item.title}
                  desc={item.discription}
                  img={item.img}
                  color={item.fontColor}
                ></ServiceCard>
              </Grid>
            ))}
          </Grid>

          {/* Range of service */}
          <Grid container spacing={2} style={{ marginTop: "16px" }}>
            {/* heading */}
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <h1>Our range of cars and vans</h1>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <p>
                Renting a car and vans with Maduram is simple and economical.
                Our cars for rent are grouped by category and available in all
                of our rental agencies throughout France, in the overseas
                departments.
              </p>
            </Grid>

            <Grid item xs={2} md={2}></Grid>
            {rangeOfCarAndVan.map((item) => (
              <Grid item xs={6} md={3} key={item.title}>
                <RangOfCarsAndVan
                  name={item.name}
                  title={item.title}
                  desc={item.discription}
                  img={item.img}
                  color={item.fontColor}
                ></RangOfCarsAndVan>
              </Grid>
            ))}

            <Grid item xs={2} md={2}></Grid>
          </Grid>

          {/* Additional info */}

          <Grid container spacing={2} style={{ marginTop: "16px" }}>
            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <h1>Do you want to know more about Maduram?</h1>
            </Grid>

            <Grid item xs={6} md={6} style={{ textAlign: "justify" }}>
              <h3>
                Do you want to move freely, on vacation or on a daily basis?
              </h3>
              <p>
                Maduram is a key player in car rental and utility rental.
                Moving, business trip, going on vacation, occasional rental ....
                Maduram has been offering turnkey solutions and short-term car
                rental offers for individuals at the best prices since 1996,
                relying on a network several hundred agencies in mainland France
                and in the overseas departments and territories. Local rental
                company, Maduram gives you the benefit of a network of more than
                350 rental agencies in mainland France, Martinique, Guadeloupe,
                Guyana and Reunion.
              </p>
            </Grid>

            <Grid item xs={6} md={6} style={{ textAlign: "justify" }}>
              <h3>Maduram offers you an online vehicle reservation service.</h3>
              <p>
                You will find on rentacar.fr a wide choice of passenger or
                utility vehicles to meet all your mobility needs. In a few
                minutes, find the right agency, near an airport or in the city
                center, next to your home or ideally located at your vacation
                spot. We have a wide range of air-conditioned vehicles with
                manual or automatic transmission, petrol or diesel: city cars,
                sedans, minivans, crossovers or minibuses. Rent a station wagon
                at unbeatable rates or opt for the comfort and quality of
                top-of-the-range vehicles. Many options accompany each car
                rental for a tailor-made service: GPS, car seat, etc.
              </p>
            </Grid>

            <Grid item xs={6} md={6} style={{ textAlign: "justify" }}>
              <h3>
                Maduram, the reference in car rental and utility rental in
                France.
              </h3>
              <p>
                We offer you the best in car rental. For us, it must be
                synonymous with pleasure, whether you decide to rent a vehicle
                for your leisure or whether you need it for your daily trips to
                Lyon, Paris, Nancy or Marseille! Our agencies have recent
                fleets, made up of the most popular brands: Renault, Peugeot,
                Citroën, Toyota, Volkswagen, BMW, Audi, Mercedes... Our rental
                companies welcome you to the agency during opening hours,
                generally from Monday to Saturday, and can be contacted directly
                by telephone.
              </p>
            </Grid>

            <Grid item xs={6} md={6} style={{ textAlign: "justify" }}>
              <h3>Maduram at the service of professionals</h3>
              <p>
                Maduram also supports professionals with long-term rental
                solutions, ideal for independent drivers and VTCs looking for a
                comfortable and prestigious vehicle. For drivers who do not hold
                a B licence, or who have had their license suspended, we also
                offer a network of agencies offering a car rental service
                without a licence. You will be able to move freely, in town and
                on the road, alone, as a couple or with your family.
              </p>
            </Grid>
          </Grid>

          {/* more content */}
          <Grid
            container
            spacing={2}
            style={{ marginTop: "16px", background: "aliceblue" }}
          >
            <Grid item xs={6} md={2}></Grid>
            {moreContent.map((item) => (
              <Grid
                item
                xs={6}
                md={2}
                key={item.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "19rem",
                  whiteSpace: "nowrap",
                }}
              >
                <img src={item.img}></img>
                <h3>{item.title}</h3>
              </Grid>
            ))}

            <Grid item xs={6} md={2}></Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </>
  );
}
