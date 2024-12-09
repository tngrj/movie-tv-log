import React from 'react';
import StarRating from './StarRating';
import { Badge } from './ui/badge';
import { Heart, RefreshCw } from 'lucide-react';

interface MovieCardProps {
  title: string;
  watchedDate: string;
  rewatch: boolean;
  rating: number;
  liked: boolean;
  imageSrc: string;
  hasReview: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  watchedDate,
  rewatch,
  rating,
  liked,
  imageSrc,
  hasReview,
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-[300px] object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          {rewatch && (
            <Badge variant="secondary">
              <RefreshCw className="w-4 h-4 mr-1" />
              Rewatch
            </Badge>
          )}
          {liked && <Heart className="w-6 h-6 text-red-500" fill="currentColor" />}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-300">{watchedDate}</span>
        </div>
        {hasReview && (
          <Badge variant="outline" className="mt-2">
            Has Review
          </Badge>
        )}
      </div>
    </div>
  );
};

export default MovieCard;