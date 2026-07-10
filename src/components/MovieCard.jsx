import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">

      <div className="card h-100 shadow">

        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          className="card-img-top"
          alt={movie.title}
        />

        <div className="card-body d-flex flex-column">

          <h5 className="card-title">
            {movie.title}
          </h5>

          <p className="mb-1">
            ⭐ {movie.vote_average}
          </p>

          <p className="text-muted">
            {movie.release_date}
          </p>

          <Link
            to={`/movie/${movie.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;