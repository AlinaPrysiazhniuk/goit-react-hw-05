import { getCastsDetails } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noImage from '../../noImage.jpeg';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastsDetails(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => {
        throw new Error('oops...');
      });
  }, [movieId]);

  return (
    <section className={css.section_casts}>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={css.item}>
              <img
                className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : noImage
                }
                alt={name}
              />
              <p className={css.link}>Actor: {name}</p>
              <p className={css.link}>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>No information about casts</p>
      )}
    </section>
  );
};

export default Cast;
