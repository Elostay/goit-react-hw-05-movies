import { getMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [infoReview, setInfoReview] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const review = await getMovies(`movie/${movieId}/reviews`);

        setInfoReview(review.results);
      } catch (error) {
        console.log(error);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      {infoReview.length !== 0 ? (
        infoReview.map(el => (
          <div key={el.id}>
            <h2>{el.author}</h2>
            <p>{el.content}</p>
          </div>
        ))
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};
export default Reviews;
