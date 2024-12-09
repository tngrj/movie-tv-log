import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  readonly?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, readonly = true, onChange }) => {
  const renderStar = (position: number) => {
    const isHalf = rating - position === 0.5;
    const isFilled = rating >= position + 1;

    if (isHalf) {
      return <StarHalf className="w-5 h-5 text-star" fill="currentColor" />;
    }

    return (
      <Star
        className={`w-5 h-5 ${isFilled ? 'text-star' : 'text-gray-400'}`}
        fill={isFilled ? 'currentColor' : 'none'}
      />
    );
  };

  const handleClick = (position: number) => {
    if (!readonly && onChange) {
      onChange(position + 1);
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          disabled={readonly}
          className="focus:outline-none disabled:cursor-default"
        >
          {renderStar(index)}
        </button>
      ))}
    </div>
  );
};

export default StarRating;