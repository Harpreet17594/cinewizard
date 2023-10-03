import PropTypes from 'prop-types'; // Import PropTypes
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './movieCard.css';

const MovieCard = ({ title, overview, backdrop_path, onAddToWatchlist, onRemoveFromWatchlist, isAdded, category, id }) => {
  const showButtons = category === 'Movies' || category === 'TVShows';

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4 stylecard'>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
              {showButtons && (
                isAdded ? (
                  <button onClick={onRemoveFromWatchlist}>Remove Watchlist</button>
                ) : (
                  <button onClick={onAddToWatchlist}>Add Watchlist</button>
                )
              )}
              {/* Renderiza o botão "View Details" for TVShows and Movies */}
              <Link to={`/${category === 'TVShows' ? 'tv-show' : 'movie'}/${id}`}>View Details</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Define the expected prop types
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  onAddToWatchlist: PropTypes.func.isRequired,
  onRemoveFromWatchlist: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;

