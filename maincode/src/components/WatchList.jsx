
import PropTypes from 'prop-types';

function Watchlist({ watchlist }) {
  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

Watchlist.propTypes = {
  watchlist: PropTypes.array.isRequired,
};

export default Watchlist;
