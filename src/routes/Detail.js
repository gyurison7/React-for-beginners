import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getMoive = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json.data.movie);
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMoive();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Background background_image={detail.background_image}>
          <MovieContainer>
            <MovieTitle>
              <h1>
                {detail.title}({detail.year})
              </h1>
            </MovieTitle>
            <MovieBody>
              <img src={detail.medium_cover_image} alt={detail.title}/>
              <MovieDetail>
                <MovieInfo>
                  <span>| <strong>평점</strong> {detail.rating}</span>
                  <span>| <strong>다운로드</strong> {detail.download_count}</span>
                  <span>| <strong>좋아요</strong> {detail.like_count}</span>
                </MovieInfo>
                <strong>| 영화 소개</strong>
                <p>{detail.description_full}</p>
                <MovieGenres>
                <strong>| 장르</strong>
                  {detail.genres.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </MovieGenres>
              </MovieDetail>
            </MovieBody>
          </MovieContainer>
        </Background>
      )}
    </div>
  );
}

export default Detail;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Background = styled.div`
  background-image: url(${(props) => props.background_image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  color: #fff;
`;

const MovieTitle = styled.div`
  margin-bottom: 20px;
`;

const MovieBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    margin-bottom: -50px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const MovieGenres = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
