import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './movieCard.css';


const MovieCard = ({ title, overview, backdrop_path, providers }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 stylecard">
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              title="Movie Poster"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
              {/* Display providers */}
              <div className="providers">
                {providers?.length > 0 && <Typography variant="subtitle1">Available on:</Typography>}
                {/* making them providers optional. if providers don't exist, .map() will not be invoked */}
                {providers && providers.map((provider, index) => {
                  return <div key={index}>
                    <span>{provider.provider_name}</span>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                      alt={`Provider: ${provider.provider_name}`}
                      width="40px"
                      height="auto"
                    />
                  </div>
                }
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
