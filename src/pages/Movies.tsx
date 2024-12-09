import React from 'react';
import MovieCard from '@/components/MovieCard';

const Movies = () => {
  const movies = [
    {
      title: 'Pokémon Detective Pikachu',
      watchedDate: '28/05/19',
      rewatch: false,
      rating: 5,
      liked: true,
      imageSrc: 'https://a.ltrbxd.com/resized/film-poster/3/7/9/6/2/6/379626-pokemon-detective-pikachu-0-70-0-105-crop.jpg?v=5ab0bc33bf',
      hasReview: false,
    },
    // Add more movies here
  ];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">My Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;