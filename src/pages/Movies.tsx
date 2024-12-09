import MovieCard from "@/components/MovieCard";

type Movie = {
  title: string;
  watchedDate: string;
  rewatch: boolean;
  rating: number;
  liked: boolean;
  imageSrc: string;
  hasReview: boolean;
};

const dummyMovies: Movie[] = [
  {
    title: "Pokémon Detective Pikachu",
    watchedDate: "28/05/19",
    rewatch: false,
    rating: 5,
    liked: true,
    imageSrc: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&dpr=2&q=80",
    hasReview: false
  },
  {
    title: "Dune",
    watchedDate: "15/03/24",
    rewatch: true,
    rating: 4.5,
    liked: true,
    imageSrc: "https://images.unsplash.com/photo-1562159278-1253a58da141?w=800&dpr=2&q=80",
    hasReview: true
  },
  {
    title: "Oppenheimer",
    watchedDate: "01/02/24",
    rewatch: false,
    rating: 5,
    liked: true,
    imageSrc: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&dpr=2&q=80",
    hasReview: true
  }
];

const Movies = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            watchedDate={movie.watchedDate}
            rewatch={movie.rewatch}
            rating={movie.rating}
            liked={movie.liked}
            imageSrc={movie.imageSrc}
            hasReview={movie.hasReview}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;