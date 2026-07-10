import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../api/api";
import "../styles/home.css";

function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async () => {
    try {
      const res = await getPopularMovies();
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async () => {
    try {
      const res = await searchMovies(search);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search.trim() === "") {
      fetchMovies();
    } else {
      searchMovie();
    }
  }, [search]);

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="container py-5">

        <div className="row">

          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          ) : (
            <h3 className="text-center mt-5">
              No Movies Found
            </h3>
          )}

        </div>

      </div>
    </>
  );
}

export default Home;