//import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const movies = [
  {
    title: 'Movie 1',
    description: 'Description',
    imageUrl: 'URL_IMAGE_MOVIE1',
  },
  {
    title: 'Movie 1',
    description: 'Description',
    imageUrl: 'URL_IMAGE_MOVIE1',
  },
  {
    title: 'Movie 2',
    description: 'Description',
    imageUrl: 'URL_IMAGE_MOVIE2',
  },
];

function MovieCard({ title, description, imageUrl }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function MovieGrid() {
  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <MovieCard
            title={movie.title}
            description={movie.description}
            imageUrl={movie.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieGrid;
