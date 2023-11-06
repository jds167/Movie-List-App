import { useState } from "react";

const AddMovie = ({ userMovies, setUserMovies }) => {
    const [newMovie, setNewMovie] = useState("");

const handleAddMovie = () => {
    if (newMovie) {
        setUserMovies([...userMovies, newMovie]);
        setNewMovie("");
    }
};

return (
    <div>
        <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Add a new movie"
        />
        <button onClick={handleAddMovie}>Add Movie</button>
    </div>
)};

export default AddMovie;