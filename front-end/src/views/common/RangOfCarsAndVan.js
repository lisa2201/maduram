import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RangOfCarsAndVan(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{border: '2px #faf7f7 solid', height: '400px'}} >
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{color: props.color}}> 
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
