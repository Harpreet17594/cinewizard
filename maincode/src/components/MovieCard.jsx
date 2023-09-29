import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './movieCard.css';

const MovieCard = ({ title, overview ,backdrop_path}) => {
    return (
      <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-4 stylecard'>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
          <CardMedia>
            {/* <img src= alt="loading..." height={300} width={300} /> */}
            {backdrop_path}
          </CardMedia>
        </CardContent>
      </Card>
      </div>  
      </div> 
      </div>
    );
  };
  
  export default MovieCard;