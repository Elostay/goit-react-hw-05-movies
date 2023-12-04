import { fetchMovieReviewsAPI } from '../../helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, List, NotFound, Review } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [infoReview, setInfoReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const review = await fetchMovieReviewsAPI(movieId);

        setInfoReview(review.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <List>
      {!isLoading && infoReview.length === 0 && <NotFound>Not found</NotFound>}
      {infoReview.length !== 0 &&
        infoReview.map(el => (
          <li key={el.id}>
            <Author>{el.author}</Author>
            <Review>{el.content}</Review>
          </li>
        ))}
    </List>
  );
};
export default Reviews;
