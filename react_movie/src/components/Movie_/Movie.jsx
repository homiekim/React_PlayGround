import { memo } from 'react';
import Checkbox from "../Checkbox/Checkbox";
import {
  StyleMovieAnchor,
  StyleMovieCheckboxArea,
  StyleMovieContentBox,
  StyleMovieDirector,
  StyleMovieImage,
  StyleMovieImageBox,
  StyleMovieItem,
  StyleMovieList,
  StyleMovieSubtitle,
  StyleMovieTitle,
} from "./Movie.style";

const Movie = ({
  title,
  subtitle,
  image,
  link,
  director,
  checked,
  onChange,
}) => {
  return (
    <StyleMovieItem>
      <StyleMovieImageBox>
        <StyleMovieImage src={image} alt="movie-thumbnail" />
      </StyleMovieImageBox>
      <StyleMovieContentBox>
        <StyleMovieAnchor href={link}>
          <StyleMovieTitle dangerouslySetInnerHTML={{ __html: title }} />
          <StyleMovieSubtitle>{subtitle}</StyleMovieSubtitle>
          <StyleMovieDirector>감독 : {director}</StyleMovieDirector>
        </StyleMovieAnchor>
      </StyleMovieContentBox>
      <StyleMovieCheckboxArea>
        <Checkbox checked={checked} onChange={onChange} />
      </StyleMovieCheckboxArea>
    </StyleMovieItem>
  );
};

export default Movie;

const MovieList = ({ movieList, onChangeCheck }) => {
    
    return (
      <StyleMovieList>
        {movieList.map((movieItem) => {
          return (
            <Movie
              key={movieItem.title}
              {...movieItem} 
              onChange={() => onChangeCheck(movieItem.link)}
            />
          );
        })}
      </StyleMovieList>
    );
  };
  
  export const Movies = memo(MovieList);