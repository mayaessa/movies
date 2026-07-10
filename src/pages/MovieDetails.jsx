import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const res = await getMovieDetails(id);
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5">

      <Link to="/" className="btn btn-outline-primary mb-4">
        ← Back
      </Link>

      <div className="card shadow-lg border-0 overflow-hidden">

        <div className="row g-0 align-items-center">

          <div className="col-lg-5 col-md-5">

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid w-100 movie-img"
              alt={movie.title}
            />

          </div>

          
          <div className="col-lg-7 col-md-7">

            <div className="card-body p-3">

              <h2 className="fw-bold mb-3">
                {movie.title}
              </h2>

              <p className="text-muted mb-2">
                📅 {movie.release_date}
              </p>

              <p className="text-warning fw-bold mb-3">
                ⭐ {movie.vote_average}
              </p>

              <h5>Overview</h5>

              <p className="movie-text">
                {movie.overview}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;