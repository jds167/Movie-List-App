import React from 'react';

const MovieNames = () => {
    const movies = [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ];

    return (
        <div>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default MovieNames;