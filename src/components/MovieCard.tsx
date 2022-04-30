import React from 'react';
import {Movie} from '../pages/HomePage';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type MovieCardProps = {
    movie: Movie;
};

export const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return(
        <div className="flex space-x-3">
            <img
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt=""
              className="h-36 w-28 rounded-xl"
            />
            <div className="space-y-2">
              <div className="font-bold text-lg text-darkbrown">
                {movie.title}
              </div>
              <div className="text-md text-brown truncate-2-lines">
                {movie.overview}
              </div>
              <div className="text-ivory2 text-sm">(`평점: ${movie.vote_average}`)</div>
            </div>
          </div>
    )
}