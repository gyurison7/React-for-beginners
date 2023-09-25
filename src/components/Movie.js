import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ movie }) {
  return (
    <MovieContainer key={movie.id}>
      <MovieTitle>
        <h2>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
      </MovieTitle>
      <MovieBody>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <MovieDetail>
          <p>{movie.summary}</p>
          <MovieGenres>
            {movie.genres.map((g) => (
              <span key={g}>{g}</span>
            ))}
          </MovieGenres>
        </MovieDetail>
      </MovieBody>
    </MovieContainer>
  );
}

export default Movie;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 23px;
`;

const MovieTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const MovieBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;

  img {
    width: 230px;
    height: 345px;
  }
`;

const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 345px;
  max-height: 345px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10; // 최대 표시 라인 수
    -webkit-box-orient: vertical;
    max-height: calc(
      (1.2em * 10) + (0.5em * 9)
    ); // line-height * line-clamp + line-gap * (line-clamp - 1)
  }
`;

const MovieGenres = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
