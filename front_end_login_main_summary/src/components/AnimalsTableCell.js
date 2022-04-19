import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function AnimalsTableCell(props) {
  const theme = useTheme();
function onSelect(){
    console.log("clicked button");
}

  return (
   <Card sx={{ display: 'flex' }}>
    <Button onClick={onSelect} href={`http://localhost:3000/summary?id=${props.animalId}`} variant="outlined" >Select</Button>

      <CardMedia
        component="img"
        sx={{ width: 100, height: 100}}
        image ={props.url}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
              {props.animalName}
          </Typography>
          <Typography component="div" variant="h6">
              {props.animalId}
          </Typography>
        </CardContent>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
              {props.animalAvailability}
          </Typography>
          <Typography component="div" variant="h6">
              {props.sex}
          </Typography>
        </CardContent>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
              {props.weight}
          </Typography>
          <Typography component="div" variant="h6">
              {props.rfid}
          </Typography>
        </CardContent>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
              {props.animalSpecies}
          </Typography>
          <Typography component="div" variant="h6">
              {props.subSpecies}
          </Typography>
        </CardContent>

      </Box>
    </Card>
  );
}

export default AnimalsTableCell;
