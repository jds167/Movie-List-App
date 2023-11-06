import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Body() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

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

  return (
    <div>
      <h1>Movies</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredMovies.length > 0
          ? filteredMovies.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))
          : movies.map((movie, index) => <li key={index}>{movie.title}</li>)}
      </ul>
    </div>
  );
}

export default Body;
