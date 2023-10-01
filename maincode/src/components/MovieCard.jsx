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
      <CardMedia
        sx={{ height: 140 }}
        image= {`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        title="green iguana"
      />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </Card>
      </div>  
      </div> 
      </div>
    );
  };
  
  export default MovieCard;