import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

function Body() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);

  const url = "http://localhost:8082/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const handleSearch = (search) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(results);
  };

  const handleDeleteMovie = (movieToDelete) => {
    const updatedUserMovies = userMovies.filter(
      (movie) => movie !== movieToDelete
    );
    setUserMovies(updatedUserMovies)
  };

  return (
    <div>
      <h1>Movies</h1>
      <AddMovie userMovies={userMovies} setUserMovies={setUserMovies} />
      <SearchBar onSearch={handleSearch} />
      <ul>
        {(filteredMovies.length > 0 ? filteredMovies : userMovies).map(
          (movie, index) => (
            <li key={index}>
              {movie.title || movie}{" "}
              {userMovies.includes(movie) && (
                <button onClick={() => handleDeleteMovie(movie)}>Delete</button>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Body;
