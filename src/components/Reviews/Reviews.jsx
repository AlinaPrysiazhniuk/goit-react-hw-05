import { getReviewsDetails } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Reviews..module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewsDetails(movieId)
      .then(({ data }) => {
        setReview(data.results);
      })
      .catch(error => {
        throw new Error('ooops...');
      });
  }, [movieId]);

  return (
    <section className={css.review}>
      <div className={css.container}>
        {review.length > 0 ? (
          <ul>
            {review.map(({ id, author, content }) => (
              <li key={id} className={css.item}>
                <h3 className={css.author}>Author: {author}</h3>
                <p className={css.content}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.text}>We dont have any reviews</p>
        )}
      </div>
    </section>
  );
};
export default Reviews;
